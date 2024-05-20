import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'data',
  initialState: {
    sidebar: null,
  },
  reducers: {
    setShow: (state, action) => {
      state.sidebar = action.payload
    },
  },
})

export const { setShow } = sidebarSlice.actions

export default sidebarSlice.reducer
