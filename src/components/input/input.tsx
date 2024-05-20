interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  value?: string
  type?: string
  name?: string
  isDisabled?: boolean
}

export default function Input({
  onChange,
  className,
  placeholder,
  value,
  type,
  name,
  isDisabled,
}: ButtomProps) {
  return (
    <>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        disabled={isDisabled}
        className={`w-full h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-gray-200 focus:border-solid-[4px] focus:border-gray-500 focus:outline-none ${className}`}
      ></input>
    </>
  )
}
