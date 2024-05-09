interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  value?: string
  type?: string
  name?: string
}

export default function Input({
  onChange,
  className,
  placeholder,
  value,
  type,
  name,
}: ButtomProps) {
  return (
    <>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={`w-full h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-blue-200 ${className}`}
      ></input>
    </>
  )
}
