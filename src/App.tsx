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
import PaymentSlip from './pages/sale-management/payment-slip'
import DepositList from './pages/sale-management/deposit-list'
import CustomerLedger from './pages/sale-management/customer-ledger'
import PurchaseOrder from './pages/purchase-management/purchase-order'
import PurchaseOrderList from './pages/purchase-management/order-list'
import PurchaseSlip from './pages/purchase-management/purchase-slip'
import PurchaseList from './pages/purchase-management/purchase-list'
import PurchasePaymentSlip from './pages/purchase-management/purchase-payment-slip'

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
            <Route
              path='/sale-management/payment-slip'
              element={<PaymentSlip />}
            />
            <Route
              path='/sale-management/deposit-list'
              element={<DepositList />}
            />
            <Route
              path='/sale-management/customer-ledger'
              element={<CustomerLedger />}
            />
            <Route
              path='/purchase-management/purchase-order'
              element={<PurchaseOrder />}
            />
            <Route
              path='/purchase-management/purchase-order-list'
              element={<PurchaseOrderList />}
            />
            <Route
              path='/purchase-management/purchase-slip'
              element={<PurchaseSlip />}
            />
            <Route
              path='/purchase-management/purchase-list'
              element={<PurchaseList />}
            />
            <Route
              path='/purchase-management/purchase-payment-slip'
              element={<PurchasePaymentSlip />}
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
