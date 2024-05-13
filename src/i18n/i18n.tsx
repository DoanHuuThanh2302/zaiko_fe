import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import SidebarJa from '../locales/ja/sidebar.json'
import SidebarEn from '../locales/en/sidebar.json'
import QuotationJa from '../locales/ja/quotation-slip-input.json'
import EstimateListJa from '../locales/ja/estimate-list.json'
import CommonJa from '../locales/ja/common.json'
import OrderSlipEntryJa from '../locales/ja/order-slip-entry.json'
import SaleSlipEntryJa from '../locales/ja/sale-slip-entry.json'
import OrderListJa from '../locales/ja/order-list.json'
import SaleListJa from '../locales/ja/sale-list.json'
import BillingDeadlineJa from '../locales/ja/billing-deadline.json'
import InvoiceIssueJa from '../locales/ja/invoice-issue.json'
import PaymentSlipJa from '../locales/ja/payment-slip.json'
import DepositListJa from '../locales/ja/deposit-list.json'
import CustomerLedgerJa from '../locales/ja/customer-ledger.json'
import PurchaseOrderJa from '../locales/ja/purchase-order.json'
import PurchaseOrderListJa from '../locales/ja/purchase-order-list.json'

const resources = {
  ja: {
    sidebar: SidebarJa,
    quotation: QuotationJa,
    estimatelist: EstimateListJa,
    common: CommonJa,
    orderslipentry: OrderSlipEntryJa,
    saleslipentry: SaleSlipEntryJa,
    orderlist: OrderListJa,
    salelist: SaleListJa,
    billingdeadline: BillingDeadlineJa,
    invoiceissue: InvoiceIssueJa,
    paymentslip: PaymentSlipJa,
    depositlist: DepositListJa,
    customerledger: CustomerLedgerJa,
    purchaseorder: PurchaseOrderJa,
    purchaseorderlist: PurchaseOrderListJa,
  },
  en: { sidebar: SidebarEn },
}

i18n.use(initReactI18next).init({
  resources,
  ns: [
    'sidebar',
    'quotation',
    'estimatelist',
    'common',
    'orderslipentry',
    'saleslipentry',
    'orderlist',
    'salelist',
    'billingdeadline',
    'invoiceissue',
    'paymentslip',
    'depositlist',
    'customerledger',
    'purchaseorder',
    'purchaseorderlist',
  ],
  lng: import.meta.env.VITE_DEFAULT_LANG || 'ja',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
