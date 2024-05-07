import { Routes, Route, Outlet } from 'react-router-dom'
import EstimateList from './pages/sale-management/estimate-list'
import Sidebar from './components/sidebar/sidebar'
import { useSelector } from 'react-redux'

const SidebarLayout = () => {
  const show = useSelector((state: any) => state.sidebarData.sidebar)
  return (
    <>
      <Sidebar />
      <div
        className={`lg:w-[calc(100%-241px)] ${
          show ? 'ml-0' : 'ml-[241px]'
        }  z-[100]`}
      >
        <Outlet />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <main className={`bg-[#F9FBFD]`}>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path='/estimate-list' element={<EstimateList />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
