import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
  const Routes = () => useRoutes(AppRoutes)
  const queryClient = new QueryClient(
    // {
    //   defaultOptions: {
    //     queries: {
    //       staleTime: Infinity,
    //     },
    //   },
    // }
  )

  return (
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <BrowserRouter> 
            <Routes />
        </BrowserRouter>
    </QueryClientProvider>
    
  )
}
