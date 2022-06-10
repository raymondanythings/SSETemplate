import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../screen/Home'
import Layout from './Layout'

const Exit = () => {
	const navigation = useNavigate()

	return (
		<>
			<button onClick={() => navigation(-1)}>돌아가기</button>
		</>
	)
}

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Layout />}>
					<Route path="" element={<Home />} />
					<Route path="exit" element={<Exit />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RootRouter
