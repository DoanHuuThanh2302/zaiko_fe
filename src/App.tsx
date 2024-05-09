import { Routes, Route, Outlet } from 'react-router-dom'
import EstimateList from './pages/sale-management/estimate-list'
import Sidebar from './components/sidebar/sidebar'
import Quotation from './pages/sale-management/quotation-slip-input'
import OrderSlipEntry from './pages/sale-management/sale-slip-entry'
import { useSelector } from 'react-redux'

const SidebarLayout = () => {
  const show = useSelector((state: any) => state.sidebarData.sidebar)
  return (
    <>
      <Sidebar />
      <div
        className={`${
          show ? 'ml-0' : 'ml-[241px] lw-[calc(100%-261px)]'
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
      <main>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path='/estimate-list' element={<EstimateList />} />
            <Route
              path='/sale-management/quotation-slip-input'
              element={<Quotation />}
            />
            <Route
              path='/sale-management/sale-slip-entry'
              element={<OrderSlipEntry />}
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
