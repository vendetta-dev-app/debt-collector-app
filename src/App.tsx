import { Toaster } from 'react-hot-toast'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import client from '@/client'

function App() {
  return (
      <ApolloProvider client={client}>
        <RouterProvider router={router}/>
        <Toaster position="bottom-center"/>
      </ApolloProvider>
  )
}

export default App
