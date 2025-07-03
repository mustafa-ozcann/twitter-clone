import { useEffect } from "react"
import router from "./router"
import { RouterProvider } from "react-router-dom"
import { useAuthStore } from "./zustand/authStore"

function App() {
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    initializeAuth()
  }, [])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
