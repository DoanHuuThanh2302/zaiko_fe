import React from 'react'
import PaginatedItems from '../pagination/paging'

interface DataTableProps {
  data: any[]
  columns: any[]
  title?: string
  className?: string
  handleChange?: any
  totalPage: number
  forcePage?: number
  paginate?: (pageNumber?: number) => void
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  title,
  className,
  totalPage,
  forcePage,
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
      <div className='overflow-x-auto xl:overflow-visible w-full'>
        <table className={'bg-white w-[1025px] xl:w-full '}>
          <thead className={'bg-[#F9FBFD] border border-[#EDF2F6]'}>
            <tr>
              {columns.map((column) => (
                <th
                  className={`py-[8px] text-[12px] text-center border border-[#EDF2F6] bg-[#0095ce] text-left text-white ${column.className}`}
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
                      className={`border border-[#EDF2F6] text-left break-all ${
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
                      className={`border border-[#EDF2F6] text-left break-all ${
                        column.className ? column.className : ''
                      }`}
                      key={column.key}
                    >
                      <input type='text' className='w-full' />
                    </td>
                  ) : (
                    <td
                      className={`border border-[#EDF2F6] text-left break-all ${
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
        <div className={'w-full'}>
          <PaginatedItems
            //setCurrentPage={paginate}
            totalPages={totalPage}
            current_page={forcePage}
          />
        </div>
      </div>
    </div>
  )
}

export default DataTable
