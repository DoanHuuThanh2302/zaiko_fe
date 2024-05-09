interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  type?: string
  name?: string
  check?: boolean
}

export default function Radio({
  onChange,
  className,
  placeholder,
  type,
  name,
  check,
}: ButtomProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        checked={check}
        className={`w-[450px] h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-blue-200 ${className}`}
      ></input>
    </>
  )
}
