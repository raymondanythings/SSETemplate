import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { BsTwitter } from 'react-icons/bs'
const Layout = () => {
	const [id, setId] = useState<string>('')
	const summitting = () => {
		localStorage.setItem('id', id)
		setId('')
	}
	const navigation = useNavigate()
	return (
		<>
			<header className="flex flex-col items-end py-1">
				<div className="fixed right-4 flex flex-col space-y-2">
					<input
						type="string"
						placeholder="id값?"
						className="bg-transparent"
						value={id}
						onChange={(e) => {
							const value = e.target.value
							setId((prev) => value)
						}}
					/>
					<button className="ring-2" onClick={summitting}>
						변경
					</button>
					<div onClick={() => navigation('exit')} className="cursor-pointer px-3 py-1 bg-blue-300 rounded-full text-center">
						연결종료
					</div>
				</div>
				<div className="group flex justify-center items-center min-w-[32px] cursor-pointer">
					<div className="group-hover:bg-[rgba(29,155,240,0.1)] min-w-[52px] min-h-[52px] cursor-pointer rounded-full flex justify-center items-center font-bold">
						<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[24px] h-8 text-[rgb(231,233,234)] fill-current">
							<g>
								<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div className="group flex justify-center items-center min-w-[32px] cursor-pointer">
					<div className="group-hover:bg-[rgba(29,155,240,0.1)] min-w-[52px] min-h-[52px] cursor-pointer rounded-full flex justify-center items-center font-bold">
						<svg viewBox="0 0 24 24" className="w-[24px] h-8 text-[rgb(231,233,234)] fill-current">
							<g>
								<path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div className="group flex justify-center items-center min-w-[32px] cursor-pointer">
					<div className="group-hover:bg-[rgba(29,155,240,0.1)] min-w-[52px] min-h-[52px] cursor-pointer rounded-full flex justify-center items-center font-bold">
						<svg viewBox="0 0 24 24" className="w-[24px] h-8 text-[rgb(231,233,234)] fill-current">
							<g>
								<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div className="group flex justify-center items-center min-w-[32px] cursor-pointer">
					<div className="group-hover:bg-[rgba(29,155,240,0.1)] min-w-[52px] min-h-[52px] cursor-pointer rounded-full flex justify-center items-center font-bold">
						<svg viewBox="0 0 24 24" aria-hidden="true" className="w-[24px] h-8 text-[rgb(231,233,234)] fill-current">
							<g>
								<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div className="group flex justify-center items-center min-w-[32px] cursor-pointer">
					<div className="group-hover:bg-[rgba(29,155,240,0.1)] min-w-[52px] min-h-[52px] cursor-pointer rounded-full flex justify-center items-center font-bold">
						<svg viewBox="0 0 24 24" className="w-[24px] h-8 text-[rgb(231,233,234)] fill-current">
							<g>
								<path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
							</g>
						</svg>
					</div>
				</div>
			</header>
			<main className=" border-solid border-[#2f3336] border-x">
				<div className="w-full sticky z-10 h-[53px] px-4 flex items-center justify-between backdrop-blur-md bg-[rgba(0,0,0,0.65)]">
					<h1 className="text-[rgba(231,233,234,1)] font-bold text-xl">Home</h1>
				</div>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
