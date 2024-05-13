import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  IconsCart,
  IconsMaster,
  IconsShop,
  IconsStock,
  IconsDown,
  IconsUp,
} from '../../assets/icons/icons'

export default function Sidebar() {
  const show = useSelector((state: any) => state.sidebarData.sidebar)
  const location = useLocation()
  interface OpenSubmenus {
    [key: string]: boolean
  }

  const [openSubmenus, setOpenSubmenus] = useState<OpenSubmenus>({})

  const handleSubmenuClick = (submenuName: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [submenuName]: !prev[submenuName],
    }))
  }

  const getNavLinkClass = (path: string, customClass: string) => {
    return location.pathname === path ? `${customClass} font-bold` : ''
  }

  const [t] = useTranslation()

  return (
    <>
      {show ? null : (
        <>
          {' '}
          <div className='fixed left-0 top-0 flex flex-col w-full lg:overflow-y-auto h-full lg:w-[241px] z-[500] lg:z-0 bg-[#0070c0]'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
              <div className='fixed flex flex-col top-0 left-0 bg-[#0070c0] w-64 h-full'>
                <div className='flex items-center justify-start ml-2 h-14 w-full z-10 absolute'>
                  <img
                    src='https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png'
                    alt='Logo'
                    className='w-28 h-18 mr-2'
                  />
                </div>
                <div className='overflow-y-auto overflow-x-hidden flex-grow mt-12'>
                  <ul className='flex flex-col py-4'>
                    <li
                      className='px-5 cursor-pointer bg-[#1e4e79] border-y pb-3'
                      onClick={() => handleSubmenuClick('sale')}
                    >
                      <div className='flex flex-row items-end h-8'>
                        <IconsShop />
                        <div className='text-sm ml-2 text-nowrap text-white font-bold'>
                          {t('sidebar:Sidebar.SalesManagement')}
                        </div>
                        <div className='ml-[110px] mb-1.5'>
                          {openSubmenus['sale'] ? <IconsUp /> : <IconsDown />}
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul
                        className={`${
                          openSubmenus['sale'] ? 'block' : 'hidden'
                        } ml-2`}
                      >
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/quotation-slip-input',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/quotation-slip-input'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.QuotationSlipInput')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/estimate-list',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.EstimateList')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/order-form',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/order-form'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.OrderSlipEntry')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/order-list',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/order-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.OrderList')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/sale-slip-entry',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/sale-slip-entry'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.SalesSlipEntry')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/sale-list',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/sale-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.SalesList')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/billing-deadline',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/billing-deadline'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.BillingDeadline')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/invoice-issue',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/invoice-issue'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.InvoiceIssue')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/payment-slip',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/payment-slip'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.EnterPaymentSlip')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/deposit-list',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/deposit-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.DepositList')}
                          </Link>
                        </li>
                        <li
                          className={`h-6 py-5 relative right-[10px] flex items-center focus:outline-none ${getNavLinkClass(
                            '/sale-management/customer-ledger',
                            'bg-[#1e4e79] w-[257px]'
                          )}`}
                        >
                          <Link
                            to='/sale-management/customer-ledger'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.CustomerLedger')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.ListOfAccountsReceivable')}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className='px-5 cursor-pointer bg-[#1e4e79] border-y pb-3'
                      onClick={() => handleSubmenuClick('cart')}
                    >
                      <div className='flex flex-row items-end h-8'>
                        <IconsCart />
                        <div className='text-sm ml-2 text-nowrap text-white font-bold'>
                          {t('sidebar:Sidebar.PurchaseManagement')}
                        </div>
                        <div className='ml-[110px] mb-1.5'>
                          {openSubmenus['cart'] ? <IconsUp /> : <IconsDown />}
                        </div>
                      </div>
                    </li>

                    <li>
                      <ul
                        className={`${
                          openSubmenus['cart'] ? 'block' : 'hidden'
                        } ml-2`}
                      >
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.OrderList')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PurchaseOrderEntry')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PurchaseSlipEntry')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PurchaseList')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PaymentSlipEntry')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PaymentList')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PaymentDeadline')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.ListOfAccountsPayable')}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className='px-5 cursor-pointer bg-[#1e4e79] border-y pb-3'
                      onClick={() => handleSubmenuClick('stock')}
                    >
                      <div className='flex flex-row items-end h-8'>
                        <IconsStock />
                        <div className='text-sm ml-2 text-nowrap text-white font-bold'>
                          {t('sidebar:Sidebar.InventoryControl')}
                        </div>
                        <div className='ml-[110px] mb-1.5'>
                          {openSubmenus['stock'] ? <IconsUp /> : <IconsDown />}
                        </div>
                      </div>
                    </li>

                    <li>
                      <ul
                        className={`${
                          openSubmenus['stock'] ? 'block' : 'hidden'
                        } ml-2`}
                      >
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.Receipt/PaymentSlipEntry')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t(
                              'sidebar:Sidebar.ListOfReceiptAndPaymentDetails'
                            )}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.Receipt/PaymentHistory')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.ListOfInventoryDetails')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.Inventory')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t(
                              'sidebar:Sidebar.CalculateProductionCostAndPurchaseQuantity'
                            )}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className='px-5 cursor-pointer bg-[#1e4e79] border-y pb-3'
                      onClick={() => handleSubmenuClick('master')}
                    >
                      <div className='flex flex-row items-end h-8'>
                        <div>
                          <IconsMaster />
                        </div>
                        <div className='text-sm ml-2 text-nowrap text-white font-bold'>
                          {t('sidebar:Sidebar.MasterAdmin')}
                        </div>
                        <div className='ml-[96px] mb-1.5'>
                          {openSubmenus['master'] ? <IconsUp /> : <IconsDown />}
                        </div>
                      </div>
                    </li>

                    <li>
                      <ul
                        className={`${
                          openSubmenus['master'] ? 'block' : 'hidden'
                        } ml-2`}
                      >
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.CustomMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.SupplierMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.ShippingDestinationMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PartsMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.ChildPartMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.CompanyInformation')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.PersonInChargeMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.CommonMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.WarehouseMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.StorageBinMaster')}
                          </Link>
                        </li>
                        <li className='h-6 py-5 relative right-[10px] flex items-center focus:outline-none '>
                          <Link
                            to='/estimate-list'
                            className='pl-[56px] pr-[23px] text-sm font-bold text-white'
                          >
                            {t('sidebar:Sidebar.CostSearch')}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
