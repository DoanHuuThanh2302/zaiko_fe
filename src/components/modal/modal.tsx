import React from 'react'

interface ModalProps {
  children?: React.ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  return (
    <>
      <div
        className='fixed inset-0 bg-white bg-opacity-20 transition-opacity'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      ></div>
      <div className='fixed inset-0 z-[100] w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0'>
          <div
            className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl ${className}`}
          >
            <div className={`bg-white`}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
