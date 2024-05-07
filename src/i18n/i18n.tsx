import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import SidebarJa from '../locales/ja/sidebar.json'
import SidebarEn from '../locales/en/sidebar.json'

const resources = {
  ja: { sidebar: SidebarJa },
  en: { sidebar: SidebarEn },
}

i18n.use(initReactI18next).init({
  resources,
  ns: ['sidebar'],
  lng: import.meta.env.VITE_DEFAULT_LANG || 'ja',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
