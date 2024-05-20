import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../components/sidebar/sidebar-slice'

export const store = configureStore({
  reducer: {
    sidebarData: sidebarReducer,
  },
})
