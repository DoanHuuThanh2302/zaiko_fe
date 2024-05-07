import { useTranslation } from 'react-i18next'
import {
  IconsChevronsLeft,
  IconsChevronsRight,
  IconsUser,
} from '../../assets/icons/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShow } from '../sidebar/sidebar-slice'

const Header = () => {
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [showSideBar, setShowSideBar] = useState(true)

  const handleShowSidebar = () => {
    setShowSideBar(!showSideBar)
    dispatch(setShow(showSideBar))
  }

  return (
    <>
      <div
        className={`${
          showSideBar ? 'ml-4' : 'ml-0'
        } h-14 bg-[#F9FBFD] mt-0 flex fixed w-full z-[9] border-b`}
      >
        <div
          className='ml-3 flex items-center cursor-pointer'
          onClick={() => handleShowSidebar()}
        >
          {showSideBar ? <IconsChevronsLeft /> : <IconsChevronsRight />}
        </div>
        <div className='flex justify-between items-center h-full ml-10 w-full'>
          <p>見積伝票入力</p>
          <div className={`${showSideBar ? ' mr-[300px]' : 'mr-[43px]'}`}>
            <IconsUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
