interface ButtomProps {
  onChange?: any
  className?: string
  placeholder?: string
  value?: string
  type?: string
  name?: string
}

export default function DateInput({
  onChange,
  className,
  placeholder,
  value,
  name,
}: ButtomProps) {
  return (
    <>
      <input
        type='date'
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        min='1990-01-01'
        max='2010-12-31'
        className={`w-[450px] h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-blue-200 ${className}`}
      ></input>
    </>
  )
}
