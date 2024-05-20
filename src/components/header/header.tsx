import {
  IconsMenu,
  IconsChevronsRight,
  IconsUser,
} from '../../assets/icons/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShow } from '../sidebar/sidebar-slice'

const Header = ({ category = '' }: { category?: string }) => {
  const dispatch = useDispatch()
  const [showSideBar, setShowSideBar] = useState(true)

  const handleShowSidebar = () => {
    setShowSideBar(!showSideBar)
    dispatch(setShow(showSideBar))
  }

  return (
    <>
      <div className={`h-16 bg-[#00b0f0] mt-0 flex w-full z-[9]`}>
        <div
          className='ml-6 flex items-center cursor-pointer'
          onClick={() => handleShowSidebar()}
        >
          {showSideBar ? <IconsMenu /> : <IconsChevronsRight />}
        </div>
        <div className='flex justify-between items-center h-full ml-10 w-full'>
          <p className='text-white text-[17px] font-bold'>{category}</p>
          <div className={`mr-[50px]`}>
            <IconsUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
