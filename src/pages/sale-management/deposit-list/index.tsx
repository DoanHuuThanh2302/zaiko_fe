import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsDown, IconsSearch, IconsUp } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import record from '../../../../data/sale-list.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DepositList() {
  const navigate = useNavigate()
  const data = record.records
  const [startDate, setStartDate] = useState(new Date())
  const [showSearch, setShowSearch] = useState(true)
  const [t] = useTranslation()
  const columns = [
    {
      name: t('depositlist:DepositList.SlipNumber'),
      key: 'invoiceNumber',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center underline text-[#2e75b5] text-nowrap py-5`}
        >
          {record.invoiceNumber}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.Subject'),
      key: 'subject',
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.SaleDate'),
      key: 'saleDate',
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.CustomerCode'),
      key: 'customerCode',
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.CustomerName'),
      key: 'customerName',
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.TotalExcludingTax'),
      key: 'totalExcludingTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.totalExcludingTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.TotalIncludingTax'),
      key: 'totalIncludingTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.totalIncludingTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.TotalIncludingTax'),
      key: 'DeliveryNoteIssueDate',
      className: 'text-center text-nowrap',
    },
    {
      name: t('depositlist:DepositList.PaymentDay'),
      key: 'status',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap ${
            record.status === '請求済' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {record.status}
        </div>
      ),
    },
  ]
  return (
    <>
      <Header category={t('sidebar:Sidebar.DepositList')} />
      <div className='bg-gray-100 pb-[50px] h-[890px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between ml-[25px]'>
          <div
            onClick={() => setShowSearch(!showSearch)}
            className='flex items-center'
          >
            <p className='mr-[12px] cursor-pointer text-nowrap font-bold'>
              {t('depositlist:DepositList.Search')}
            </p>
            <div className='cursor-pointer'>
              {showSearch ? (
                <IconsDown color='#000000' />
              ) : (
                <IconsUp color='#000000' />
              )}
            </div>
          </div>
          <div className='flex mr-[40px]'>
            <Buttom
              text={t('depositlist:DepositList.Printing')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-8'
            />
            <Buttom
              text={t('depositlist:DepositList.NewDocument')}
              className='text-nowrap border border-green-500 text-green-500'
              onClick={() => navigate('/sale-management/order-form')}
            />
          </div>
        </div>

        {showSearch ? (
          <div>
            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px] text-nowrap '>
                  {t('depositlist:DepositList.CustomerCode')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                  <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                    <IconsSearch />
                  </div>
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px] '>
                <p className='min-w-[130px] text-nowrap '>
                  {t('depositlist:DepositList.ItemCode')}
                </p>
                <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px]'>
                  {t('depositlist:DepositList.Format')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                  <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                    <IconsSearch />
                  </div>
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <p className='min-w-[130px] text-nowrap '>
                  {t('depositlist:DepositList.ItemName')}
                </p>
                <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <div className='flex w-full'>
                  <p className='min-w-[130px] text-nowrap'>
                    {t('depositlist:DepositList.Classification')}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px]'>
                  {t('depositlist:DepositList.PaymentDay')}
                </p>
                <div className='flex w-full'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat='yyyy-MM-dd'
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-center w-full mt-5'>
              <Buttom
                text={t('depositlist:DepositList.Search')}
                className='text-nowrap border bg-[#4472c4] text-white'
              />
            </div>
          </div>
        ) : null}

        <div className='ml-[25px] mt-3'>
          <div className='flex items-center'>
            <p className='font-bold mr-[12px]'>
              {t('depositlist:DepositList.ItemDetails')}
            </p>
          </div>

          <p className='mt-3 mb-2'>{t('depositlist:DepositList.Show')}</p>
          <DataTable
            totalPage={4}
            columns={columns}
            data={data}
            className='mr-[40px]'
            forcePage={0}
          />
        </div>
      </div>
    </>
  )
}
