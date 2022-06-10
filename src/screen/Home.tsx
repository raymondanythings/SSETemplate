import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import fetchApi from '../api/fetchApi'

const Home = () => {
	const { data, isLoading } = useQuery(['tweet', 'all'], fetchApi.getTweets)
	const [tweet, setTweet] = useState('')
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await fetchApi.postTweet(tweet)
		setTweet('')
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTweet(event.target.value)
	}

	const createSSEElement = (content: string) => {
		const sseDom = document.querySelector('.sse')
		if (sseDom) {
			const username = document.createElement('span')
			const context = document.createElement('span')
			const wrapper = document.createElement('wrapper')
			wrapper.classList.add('flex', 'flex-col', 'space-y-2', 'divide-y-2')
			username.innerText = 'SSE'
			context.innerText = content
			wrapper.appendChild(username)
			wrapper.appendChild(context)
			sseDom.appendChild(wrapper)
		}
	}

	useEffect(() => {
		const id = localStorage.getItem('id')
		const sseEvent = new EventSource(`http://192.168.0.57:3000/user-tweets/events/${id}`)
		sseEvent.onopen = () => {
			console.log('연결')
		}

		sseEvent.onmessage = (stream) => {
			const parse = JSON.parse(stream.data)
			const response = parse.userTweet
			createSSEElement(response.content)
			// data && data.push({ username: 'sse', ...response })
		}

		return () => {
			sseEvent.close()
			console.log('연결종료')
		}
	}, [])
	return (
		<div className="flex flex-col divide-y-[1px] divide-[#2f3336] space-y-4">
			<div className="px-4">
				<form onSubmit={handleSubmit}>
					<input
						className="w-full bg-transparent focus:outline-none placeholder-[#717678]"
						onChange={handleChange}
						value={tweet}
						type="text"
						placeholder="What's happening?"
					/>
					<div>
						<div className="border-t-[1px] border-[#2f3336] w-full h-[53px] flex items-center justify-end">
							<button type="submit" className="rounded-full px-4 py-2 bg-blue-400 font-semibold">
								Tweet
							</button>
						</div>
					</div>
				</form>
			</div>
			<section className="sse overflow-y-auto">
				{isLoading
					? 'Loading...'
					: data?.map(({ id, username, content }) => (
							<div key={id} className="flex flex-col space-y-2 divide-y-2">
								<span>{username}</span>
								<span>{content}</span>
							</div>
					  ))}
			</section>
		</div>
	)
}

export default Home
