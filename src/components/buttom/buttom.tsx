interface ButtomProps {
  onClick?: any
  className?: string
  text?: string
}

export default function Buttom({ onClick, className, text }: ButtomProps) {
  return (
    <>
      <button
        onClick={onClick}
        type='button'
        className={`inline-block rounded-lg  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ${className}`}
      >
        {text}
      </button>
    </>
  )
}
