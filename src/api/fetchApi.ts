import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.0.57:3000'
interface TweetResponse {
	id: number
	username: string
	content: string
}

const getTweets = async () => {
	return await axios.get<TweetResponse[]>('/user-tweets').then((res) => res.data)
}

const postTweet = async (content: string) => {
	return await axios.post<TweetResponse>('/user-tweets', { content }).then((res) => res.data)
}

const getOneTweet = async (id: number) => {
	return axios.get<TweetResponse>(`/user-tweets/${id}`)
}
const patchOneTweet = async (id: number) => {
	return axios.patch(`/user-tweets/${id}`).then((res) => res.data)
}
const deleteOneTweet = async (id: number) => {
	return axios.delete<TweetResponse>(`/user-tweets/${id}`)
}

export default { getOneTweet, getTweets, postTweet, patchOneTweet, deleteOneTweet }
