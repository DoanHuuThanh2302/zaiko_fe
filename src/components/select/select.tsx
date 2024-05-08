import React from 'react'

export interface SelectOption {
  value: any
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  handleChange?: any
  className?: string
  label?: string
  placeholder?: string
  id?: string
  name?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  handleChange,
  className = '',
  label,
  placeholder,
  id,
  name,
}) => {
  return (
    <div className=''>
      {label && (
        <label className={'text-[#687C97]'} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        defaultValue={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        className={`h-[24px] border text-[10px] px-3 py-3 rounded-[3px] border-blue-200 ${className} ${
          label ? 'mt-2' : ''
        } `}
      >
        {placeholder && (
          <option
            className={'text-[#687C97]'}
            value=''
            disabled
            selected
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option className={'text-[#687C97]'} key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
