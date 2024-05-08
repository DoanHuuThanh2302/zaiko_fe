import React from 'react'

interface DataTableProps {
  data: any[]
  columns: any[]
  title?: string
  className?: string
  handleChange?: any
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  title,
  className,
}: DataTableProps) => {
  return (
    <div
      className={`${
        className ? className : ''
      } border border-solid border-[#EDF2F6] shadow-[#CAD7E31D] rounded-lg`}
    >
      {title && (
        <div
          className={'p-[18px] text-[20px] font-bold bg-[#FFFFFF] rounded-lg '}
        >
          {title}
        </div>
      )}
      <div className=' w-full'>
        <table className={'bg-white w-full lg:w-full'}>
          <thead className={'bg-[#F9FBFD] border border-[#EDF2F6]'}>
            <tr>
              {columns.map((column) => (
                <th
                  className={`py-[8px] px-[15px] text-[12px] text-center border border-[#EDF2F6] bg-[#0095ce] text-left text-white ${column.className}`}
                  key={column.key}
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {columns.map((column) =>
                  item[column.key] ? (
                    <td
                      className={`py-[15px] px-[20px] border border-[#EDF2F6] text-left break-all ${
                        column.className ? column.className : ''
                      }`}
                      key={column.key}
                    >
                      {column.format
                        ? column.format(item)
                        : item[column.key]
                        ? item[column.key]
                        : index + 1}
                    </td>
                  ) : item.hasOwnProperty(column.key) ? (
                    <td
                      className={`py-[15px] px-[20px] border border-[#EDF2F6] text-left break-all ${
                        column.className ? column.className : ''
                      }`}
                      key={column.key}
                    >
                      <input type='text' className='w-full' />
                    </td>
                  ) : (
                    <td
                      className={`py-[15px] px-[20px] border border-[#EDF2F6] text-left break-all ${
                        column.className ? column.className : ''
                      }`}
                      key={column.key}
                    >
                      {column.format
                        ? column.format(item)
                        : item[column.key]
                        ? item[column.key]
                        : index + 1}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
