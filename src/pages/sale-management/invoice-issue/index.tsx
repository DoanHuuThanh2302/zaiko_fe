import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsDown, IconsSearch, IconsUp } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import record from '../../../../data/billing-deadline.json'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function InvoiceIssue() {
  const data = record.records
  const [startDate, setStartDate] = useState(new Date())
  const [showSearch, setShowSearch] = useState(true)
  const [t] = useTranslation()
  const columns = [
    {
      name: '',
      key: 'id',
      format: () => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap py-5 px-2`}
        >
          <Input type='checkbox' className='w-[11px] h-[18px]' />
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.BillingCode'),
      key: 'CustomerCode',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center underline text-[#2e75b5] text-nowrap py-5`}
        >
          {record.CustomerCode}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.BillingName'),
      key: 'CustomerName',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap py-5`}
        >
          {record.CustomerName}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.PreviousClosingDate'),
      key: 'LastClosingDate',
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.CarryoverAmount'),
      key: 'CarriedOverAmount',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.CarriedOverAmount.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.BillingAmount'),
      key: 'BillingAmount',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.BillingAmount.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.ConsumptionTax'),
      key: 'ConsumptionTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.ConsumptionTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.BilledAmount'),
      key: 'BillingAmountIncludingTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.BillingAmountIncludingTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.CollectionDate'),
      key: 'CollectionDate',
      className: 'text-center text-nowrap',
    },
    {
      name: t('invoiceissue:InvoiceIssue.Situation'),
      key: 'ClosingStatus',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap ${
            record.ClosingStatus === '未請求'
              ? 'text-green-500'
              : 'text-red-500'
          }`}
        >
          {record.ClosingStatus}
        </div>
      ),
    },
  ]
  return (
    <>
      <Header category={t('sidebar:Sidebar.InvoiceIssue')} />
      <div className='bg-gray-100 pb-[50px] h-[890px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between ml-[25px]'>
          <div
            onClick={() => setShowSearch(!showSearch)}
            className='flex items-center'
          >
            <p className='mr-[12px] cursor-pointer text-nowrap font-bold'>
              {t('invoiceissue:InvoiceIssue.Search')}
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
              text={t('invoiceissue:InvoiceIssue.InvoicePrinting')}
              className='text-nowrap border border-green-500 text-green-500'
            />
          </div>
        </div>

        {showSearch ? (
          <div>
            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px] text-nowrap '>
                  {t('invoiceissue:InvoiceIssue.BillingCode')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                  <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                    <IconsSearch />
                  </div>
                </div>
              </div>
              <div className='flex w-1/3 pl-[50px]'>
                <p className='min-w-[50px]'>~</p>
                <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <div className='flex w-full'>
                  <p className='min-w-[130px] text-nowrap'>
                    {t('invoiceissue:InvoiceIssue.ClosingDateGroup')}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
              <div className='flex w-1/3 pl-[50px]'>
                <div className='flex w-full'>
                  <p className='min-w-[130px] text-nowrap'>
                    {t('invoiceissue:InvoiceIssue.Situation')}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px]'>
                  {t('invoiceissue:InvoiceIssue.ClosingDate')}
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

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px]'>
                  {t('invoiceissue:InvoiceIssue.CreatedDate')}
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
                text={t('invoiceissue:InvoiceIssue.Search')}
                className='text-nowrap border bg-[#4472c4] text-white'
              />
            </div>
          </div>
        ) : null}

        <div className='ml-[25px] mt-3'>
          <div className='flex items-center'>
            <p className='font-bold mr-[12px]'>
              {t('invoiceissue:InvoiceIssue.ItemDetails')}
            </p>
          </div>

          <p className='mt-3 mb-2'>{t('invoiceissue:InvoiceIssue.Show')}</p>
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
