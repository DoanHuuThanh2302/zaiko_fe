import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import SidebarJa from '../locales/ja/sidebar.json'
import SidebarEn from '../locales/en/sidebar.json'
import QuotationJa from '../locales/ja/quotation-slip-input.json'
import EstimateListJa from '../locales/ja/estimate-list.json'
import CommonJa from '../locales/ja/common.json'
import OrderSlipEntryJa from '../locales/ja/order-slip-entry.json'
import SaleSlipEntryJa from '../locales/ja/sale-slip-entry.json'

const resources = {
  ja: {
    sidebar: SidebarJa,
    quotation: QuotationJa,
    estimatelist: EstimateListJa,
    common: CommonJa,
    orderslipentry: OrderSlipEntryJa,
    saleslipentry: SaleSlipEntryJa,
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
  ],
  lng: import.meta.env.VITE_DEFAULT_LANG || 'ja',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
