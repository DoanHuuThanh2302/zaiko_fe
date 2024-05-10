import { Routes, Route, Outlet } from 'react-router-dom'
import EstimateList from './pages/sale-management/estimate-list'
import Sidebar from './components/sidebar/sidebar'
import Quotation from './pages/sale-management/quotation-slip-input'
import SaleSlipEntry from './pages/sale-management/sale-slip-entry'
import SaleList from './pages/sale-management/sale-list'
import { useSelector } from 'react-redux'
import OrderSlipEntry from './pages/sale-management/form-order'
import OrderList from './pages/sale-management/order-list'
import BillingDeadline from './pages/sale-management/billing-deadline'
import InvoiceIssue from './pages/sale-management/invoice-issue'

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
              element={<SaleSlipEntry />}
            />
            <Route
              path='/sale-management/order-form'
              element={<OrderSlipEntry />}
            />
            <Route path='/sale-management/order-list' element={<OrderList />} />
            <Route path='/sale-management/sale-list' element={<SaleList />} />
            <Route
              path='/sale-management/billing-deadline'
              element={<BillingDeadline />}
            />
            <Route
              path='/sale-management/invoice-issue'
              element={<InvoiceIssue />}
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
