import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './tailwind.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="flex min-w-[100vw] min-h-[100vh] bg-black">
			<div className="min-w-lg mx-auto w-full grid" style={{ gridTemplateColumns: '1fr 2.5fr 1fr' }}>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</div>
		</div>
	</React.StrictMode>
)
