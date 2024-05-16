import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getDay, format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { FaCalendarAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'

registerLocale('ja', ja)

const japaneseHolidays = ['01-01', '01-08']

interface DatePickerProps {
  startDate: any
  setStartDate: any
}

export default function CustomDatePicker({
  startDate,
  setStartDate,
}: DatePickerProps) {
  const [check, setCheck] = useState(false)
  useEffect(() => {
    setColorDate()
  }, [check])

  const CustomInput = ({ value, onClick }: { value?: any; onClick?: any }) => (
    <div onClick={() => setCheck(!check)}>
      <button className='custom-datepicker-button' onClick={onClick}>
        <p className='text-black'>{value || 'Select Date'}</p>
        <FaCalendarAlt className='calendar-icon' />
      </button>
    </div>
  )

  const dayClassName = (date: any) => {
    const day = getDay(date)
    const dateString = format(date, 'MM-dd')

    if (japaneseHolidays.includes(dateString)) {
      return 'react-datepicker__day--holiday'
    } else if (day === 0) {
      return 'react-datepicker__day--sunday'
    } else if (day === 6) {
      return 'react-datepicker__day--saturday'
    }
    return ''
  }

  const setColorDate = () => {
    const dateElements = document.querySelectorAll(
      '.react-datepicker__day-name'
    )
    console.log('haha')
    console.log(check)
    console.log(dateElements)
    if (dateElements.length > 0) {
      dateElements[0].classList.add('text-red-500')
      dateElements[6].classList.add('text-green-500')
    }
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        dateFormat='yyyy/MM/dd'
        customInput={<CustomInput />}
        dayClassName={dayClassName}
        calendarClassName='custom-datepicker'
        locale='ja'
      />
    </>
  )
}
