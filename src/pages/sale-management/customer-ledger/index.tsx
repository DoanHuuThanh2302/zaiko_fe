import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsSearch } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import record from '../../../../data/customer-ledger.json'
import { useState } from 'react'
import CustomDatePicker from '../../../components/input/datepicker'

export default function CustomerLedger() {
  const data = record
  const [startDate, setStartDate] = useState(new Date())

  const [t] = useTranslation()

  const totalAmount = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount
  }, 0)
  const totalSubtotal = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.subtotal
  }, 0)
  const total = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.total
  }, 0)

  const columns = [
    {
      name: t('customerledger:CustomerLedger.DocumentDate'),
      key: 'date',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap py-3`}
        >
          {record.date}
        </div>
      ),
      rowSpan: 2,
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.SlipType'),
      key: 'transaction_type',
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.Situation'),
      key: 'status',
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.ItemCode'),
      key: 'item_code',
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.ItemName'),
      key: 'item_name',
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.UnitPrice'),
      key: 'unit_price',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.unit_price.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('customerledger:CustomerLedger.Quantity'),
      key: 'quantity',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>{record.quantity}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap w-[100px]',
    },
    {
      name: t('customerledger:CustomerLedger.SaleAmountTaxt'),
      key: 'amount',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.amount.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap w-[150px]',
    },
    {
      name: t('customerledger:CustomerLedger.DepositAmountTax'),
      key: 'subtotal',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.subtotal.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap w-[150px]',
    },
    {
      name: t('customerledger:CustomerLedger.HighAmountOfAccountsReceivable'),
      key: 'total',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap
          }`}
        >
          ¥{record.total.toLocaleString('ja-JP')}
        </div>
      ),
      className: 'w-[150px]',
    },
  ]

  return (
    <>
      <Header category={t('sidebar:Sidebar.CustomerLedger')} />
      <div className='bg-gray-100 pb-[50px] h-[890px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-end ml-[25px]'>
          <div className='flex mr-[40px]'>
            <Buttom
              text={t('customerledger:CustomerLedger.Printing')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] !w-[110px]'
            />
          </div>
        </div>

        <div>
          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[130px]'>
                {t('customerledger:CustomerLedger.CustomerCode')}
              </p>
              <div className='flex w-full'>
                <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <p className='min-w-[80px] text-nowrap'>
                  {t('customerledger:CustomerLedger.CustomerName')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[130px]'>
                {t('customerledger:CustomerLedger.ClosingDate')}
              </p>
              <div className='flex w-full'>
                <Select
                  options={[]}
                  className='text-nowrap border border-gray-200 text-[10px] !bg-white !w-full h-[24px] !py-0 !rounded-[3px]'
                />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[130px]'>
                {t('customerledger:CustomerLedger.DocumentDate')}
              </p>
              <div className='flex w-full'>
                <CustomDatePicker
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[80px] pl-[25px]'>~</p>
              <div className='flex w-full'>
                <CustomDatePicker
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </div>
            </div>
          </div>

          <div className='flex justify-center w-full mt-5'>
            <Buttom
              text={t('customerledger:CustomerLedger.Search')}
              className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
            />
          </div>
        </div>

        <div className='ml-[25px] mt-3'>
          <div className='flex items-center'>
            <p className='font-bold mr-[12px]'>
              {t('customerledger:CustomerLedger.ItemDetails')}
            </p>
          </div>

          <DataTable
            totalPage={4}
            columns={columns}
            data={data}
            className='mr-[40px]'
            forcePage={0}
          >
            <div className='flex justify-end ml-[25px] w-[1000px] xl:w-full xl:pr-[25px]'>
              <div className='border border-gray-300 bg-white'>
                <table className='table-auto w-full border-collapse'>
                  <tbody>
                    <tr className='border border-gray-200'>
                      <th
                        className='min-w-[100px] align-center border border-gray-300 bg-[#a5a5a5]'
                        rowSpan={2}
                      >
                        {t('customerledger:CustomerLedger.Total')}
                      </th>
                      <th className='bg-[#0095ce] font-medium text-[12px] py-2 text-white align-center border border-gray-300 w-[150px]'>
                        {t('customerledger:CustomerLedger.SaleAmount')}
                      </th>
                      <th className='bg-[#0095ce] font-medium text-[12px] py-2 text-white align-center border border-gray-300 w-[150px]'>
                        {t('customerledger:CustomerLedger.DepositAmount')}
                      </th>
                      <th className='bg-[#0095ce] font-medium text-[12px] py-2 text-white align-center border border-gray-300 w-[150px]'>
                        {t(
                          'customerledger:CustomerLedger.HighAmountOfAccountsReceivable'
                        )}
                      </th>
                    </tr>

                    <tr className='border border-gray-200'>
                      <td className='text-center border-l border-gray-300'>
                        ¥{totalAmount.toLocaleString('ja-JP')}
                      </td>
                      <td className='text-center border-l border-gray-300'>
                        ¥{totalSubtotal.toLocaleString('ja-JP')}
                      </td>
                      <td className='text-center border-l border-gray-300'>
                        ¥{total.toLocaleString('ja-JP')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DataTable>
        </div>
      </div>
    </>
  )
}
