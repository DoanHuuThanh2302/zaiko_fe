import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Buttom from '../../../components/buttom/buttom'
import { IconsDown, IconsUp } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import record from '../../../../data/list-of-accounts-payable.json'
import { useState } from 'react'
import CustomDatePicker from '../../../components/input/datepicker'

export default function ListOfAccountsPayable() {
  const data = record
  const [startDate, setStartDate] = useState(new Date())

  const [showSearch, setShowSearch] = useState(true)
  const [t] = useTranslation()

  const columns = [
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.CustomerCode'),
      key: 'CustomerCode',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap py-3`}
        >
          {record.CustomerCode}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.CustomerName'),
      key: 'CustomerName',
      format: (record: any) => (
        <div className={`hover:cursor-pointer flex justify-center text-nowrap`}>
          {record.CustomerName}
        </div>
      ),
      className: 'w-[100px]',
    },
    {
      name: t(
        'listOfAccountsPayable:ListOfAccountsPayable.CarryForwardBalance'
      ),
      key: 'CarryForwardBalance',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.CarryForwardBalance.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.PaymentAmount'),
      key: 'PaymentAmount',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.PaymentAmount.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap w-[100px]',
    },
    {
      name: t(
        'listOfAccountsPayable:ListOfAccountsPayable.PaymentAmountExcludingTax'
      ),
      key: 'PaymentAmountExcludingTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.PaymentAmountExcludingTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.ConsumptionTax'),
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
      name: t('listOfAccountsPayable:ListOfAccountsPayable.TransferFee'),
      key: 'TransferFee',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.TransferFee.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.DateOfPayment'),
      key: 'DateOfPayment',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>{record.DateOfPayment}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t(
        'listOfAccountsPayable:ListOfAccountsPayable.PurchaseAmountIncludingTax'
      ),
      key: 'PurchaseAmountIncludingTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.PurchaseAmountIncludingTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('listOfAccountsPayable:ListOfAccountsPayable.Balance'),
      key: 'Balance',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.Balance.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
  ]
  return (
    <>
      <Header category={t('sidebar:Sidebar.ListOfAccountsPayable')} />
      <div className='bg-gray-100 pb-[50px] h-[890px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between ml-[25px]'>
          <div
            onClick={() => setShowSearch(!showSearch)}
            className='flex items-center'
          >
            <p className='mr-[12px] cursor-pointer text-nowrap font-bold'>
              {t('listOfAccountsPayable:ListOfAccountsPayable.Search')}
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
              text={t('listOfAccountsPayable:ListOfAccountsPayable.CSVoutput')}
              className='text-nowrap border border-red-500 text-red-500  mr-8 !w-[110px]'
            />
            <Buttom
              text={t(
                'listOfAccountsPayable:ListOfAccountsPayable.FormPrinting'
              )}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] !w-[110px]'
            />
          </div>
        </div>

        {showSearch ? (
          <div>
            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <div className='flex w-full'>
                  <p className='min-w-[130px] text-nowrap'>
                    {t(
                      'listOfAccountsPayable:ListOfAccountsPayable.ExtractionCondition'
                    )}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px]'>
                  {t('listOfAccountsPayable:ListOfAccountsPayable.Period')}
                </p>
                <div className='flex w-full'>
                  <CustomDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[130px] pl-[70px]'></p>
                <div className='flex w-full'>
                  <CustomDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <p className='min-w-[100px] text-nowrap flex'>
                  <p className='pl-[25px]'>~</p>
                </p>
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
                text={t('listOfAccountsPayable:ListOfAccountsPayable.Search')}
                className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
              />
            </div>
          </div>
        ) : null}

        <div className='ml-[25px] mt-3'>
          <div className='flex items-center'>
            <p className='font-bold mr-[12px]'>
              {t('listOfAccountsPayable:ListOfAccountsPayable.ItemDetails')}
            </p>
          </div>
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
