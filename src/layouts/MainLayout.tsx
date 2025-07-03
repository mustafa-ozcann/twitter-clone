import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="bg-black min-h-screen w-full flex justify-center">
      {/* Sol Sidebar */}
      <div className="hidden xl:flex flex-col w-[275px]">
        <Sidebar />
      </div>
      {/* Orta İçerik */}
      <main className="flex-1 max-w-[600px] border-x border-gray-800 min-h-screen">
        <Outlet />
      </main>
      {/* Sağ Sidebar */}
      <div className="hidden xl:block w-[350px]">
        <RightSidebar />
      </div>
    </div>
  )
}

export default MainLayout