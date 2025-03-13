import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import { AppRoutes } from './routes/app-routes'
import { Toaster } from './components/ui/sonner'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
