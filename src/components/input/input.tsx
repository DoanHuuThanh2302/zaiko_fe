interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  value?: string
  type?: string
}

export default function Input({
  onChange,
  className,
  placeholder,
  value,
  type,
}: ButtomProps) {
  return (
    <>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-[450px] h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-blue-200 ${className}`}
      ></input>
    </>
  )
}
