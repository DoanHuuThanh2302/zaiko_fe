import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsDown, IconsSearch, IconsUp } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import record from '../../../../data/estimate-list.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomDatePicker from '../../../components/input/datepicker'

export default function EstimateList() {
  const navigate = useNavigate()
  const data = record.records
  const [showSearch, setShowSearch] = useState(true)
  const [t] = useTranslation()
  const [startDate, setStartDate] = useState(new Date())
  const columns = [
    {
      name: t('estimatelist:EstimateList.SlipNumber'),
      key: 'invoiceNumber',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer flex justify-center text-nowrap py-3`}
        >
          {record.invoiceNumber}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('estimatelist:EstimateList.Subject'),
      key: 'subject',
      className: 'text-center text-nowrap w-2/12',
    },
    {
      name: t('estimatelist:EstimateList.SaleDate'),
      key: 'saleDate',
      className: 'text-center text-nowrap',
    },
    {
      name: t('estimatelist:EstimateList.CustomerCode'),
      key: 'customerCode',
      className: 'text-center text-nowrap w-1/12',
    },
    {
      name: t('estimatelist:EstimateList.CustomerName'),
      key: 'customerName',
      className: 'text-center text-nowrap',
    },
    {
      name: t('estimatelist:EstimateList.TotalExcludingTax'),
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
      name: t('estimatelist:EstimateList.TotalConsumptionTax'),
      key: 'totalTax',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.totalTax.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('estimatelist:EstimateList.TotalIncludingTax'),
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
      name: t('estimatelist:EstimateList.Situation'),
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
      <Header category={t('sidebar:Sidebar.EstimateList')} />
      <div className='bg-gray-100 pb-[50px] h-[890px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between ml-[25px]'>
          <div
            onClick={() => setShowSearch(!showSearch)}
            className='flex items-center'
          >
            <p className='mr-[12px] cursor-pointer text-nowrap font-bold'>
              {t('estimatelist:EstimateList.Search')}
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
              text={t('estimatelist:EstimateList.NewDocument')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-8 !w-[110px]'
              onClick={() => navigate('/sale-management/quotation-slip-input')}
            />
            <Buttom
              text={t('estimatelist:EstimateList.Print')}
              className='text-nowrap border border-cyan-500 text-cyan-500 !w-[110px]'
            />
          </div>
        </div>

        {showSearch ? (
          <div>
            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[100px] text-nowrap '>
                  {t('estimatelist:EstimateList.CustomerCode')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                  <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                    <IconsSearch />
                  </div>
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px] '>
                <p className='min-w-[100px] text-nowrap '>
                  {t('estimatelist:EstimateList.ItemCode')}
                </p>
                <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <div className='flex w-full'>
                  <p className='min-w-[50px] text-nowrap'>
                    {t('estimatelist:EstimateList.Classification')}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[100px]'>
                  {t('estimatelist:EstimateList.Format')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                  <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                    <IconsSearch />
                  </div>
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <p className='min-w-[100px] text-nowrap '>
                  {t('estimatelist:EstimateList.ItemName')}
                </p>
                <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <div className='flex w-full'>
                  <p className='min-w-[50px] text-nowrap'>
                    {t('estimatelist:EstimateList.Situation')}
                  </p>
                  <Select options={[]} className='!w-full !bg-white' />
                </div>
              </div>
            </div>

            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-2/3'>
                <p className='min-w-[100px]'>
                  {t('estimatelist:EstimateList.Subject')}
                </p>
                <div className='flex w-full'>
                  <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
                </div>
              </div>
            </div>
            <div className='flex ml-[25px] mt-3 mr-[40px]'>
              <div className='flex w-1/3'>
                <p className='min-w-[100px]'>
                  {t('estimatelist:EstimateList.EstimatedDate')}
                </p>
                <div className='flex w-full'>
                  <CustomDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
              </div>
              <div className='flex w-1/3 pl-[30px]'>
                <p className='min-w-[100px] text-nowrap pl-[30px]'>~</p>
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
                text={t('estimatelist:EstimateList.Search')}
                className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
              />
            </div>
          </div>
        ) : null}

        <div className='ml-[25px] mt-3'>
          <div className='flex items-center'>
            <p className='font-bold mr-[12px]'>
              {t('estimatelist:EstimateList.ItemDetails')}
            </p>
          </div>

          <p className='mt-3 mb-2'>{t('estimatelist:EstimateList.Show')}</p>
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
