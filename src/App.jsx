import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Recipes } from './pages/Recipes.jsx'
import { LastRecipe } from './pages/LastRecipe.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'

import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { SocketIOContextProvider } from './contexts/SocketIOContext.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

const router = createBrowserRouter([
   {
      path: '/',
      element: <Recipes />,
   },
   {
      path: '/newrecipe',
      element: <LastRecipe />,
   },
   {
      path: '/signup',
      element: <Signup />,
   },
   {
      path: '/login',
      element: <Login />,
   },
])

export function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <AuthContextProvider>
            <SocketIOContextProvider>
               <RouterProvider router={router} />
            </SocketIOContextProvider>
         </AuthContextProvider>
      </QueryClientProvider>
   )
}
