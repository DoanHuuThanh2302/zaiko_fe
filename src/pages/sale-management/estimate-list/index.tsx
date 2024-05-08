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

export default function EstimateList() {
  const navigate = useNavigate()
  const [data, setData] = useState(record.records)
  const [showSearch, setShowSearch] = useState(true)
  const [showDataDetails, setShowDataDetails] = useState(true)
  const [t] = useTranslation()
  const columns = [
    {
      name: t('estimatelist:EstimateList.SlipNumber'),
      key: 'invoiceNumber',
    },
    {
      name: t('estimatelist:EstimateList.Subject'),
      key: 'subject',
    },
    {
      name: t('estimatelist:EstimateList.SaleDate'),
      key: 'saleDate',
    },
    {
      name: t('estimatelist:EstimateList.CustomerCode'),
      key: 'customerCode',
    },
    {
      name: t('estimatelist:EstimateList.CustomerName'),
      key: 'customerName',
    },
    {
      name: t('estimatelist:EstimateList.TotalExcludingTax'),
      key: 'totalExcludingTax',
    },
    {
      name: t('estimatelist:EstimateList.TotalConsumptionTax'),
      key: 'totalTax',
    },
    {
      name: t('estimatelist:EstimateList.TotalIncludingTax'),
      key: 'totalIncludingTax',
    },
    {
      name: t('estimatelist:EstimateList.Situation'),
      key: 'status',
      format: (record: any) => (
        <div
          className={`hover:cursor-pointer ${
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
            <p className='mr-[12px] cursor-pointer'>
              {t('estimatelist:EstimateList.Search')}
            </p>
            <div className='cursor-pointer'>
              {showSearch ? <IconsDown /> : <IconsUp />}
            </div>
          </div>
          <div className='flex mr-[40px]'>
            <Buttom
              text={t('estimatelist:EstimateList.NewDocument')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-8'
              onClick={() => navigate('/sale-management/quotation-slip-input')}
            />
            <Buttom
              text={t('estimatelist:EstimateList.Print')}
              className='text-nowrap border border-cyan-500 text-cyan-500'
            />
          </div>
        </div>

        {showSearch ? (
          <div>
            <div className='flex ml-[25px]'>
              <div className='flex w-1/3 justifi-between'>
                <p className=' text-nowrap w-3/5'>
                  {t('estimatelist:EstimateList.CustomerCode')}
                </p>
                <Input className='!w-full' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[26px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
              <div className='flex w-1/3 justifi-between ml-[30px]'>
                <p className='text-nowrap  w-2/5'>
                  {t('estimatelist:EstimateList.ItemCode')}
                </p>
                <Input className='w-full ' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[26px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
              <div className='flex w-1/3 justifi-between ml-[150px] mr-[40px]'>
                <p className='text-nowrap mr-5'>
                  {t('estimatelist:EstimateList.Classification')}
                </p>
                <Select options={[]} className='w-[100px] !bg-white' />
              </div>
            </div>

            <div className='flex ml-[25px] mt-3'>
              <div className='flex w-1/3 justifi-between'>
                <p className=' text-nowrap w-3/5'>
                  {t('estimatelist:EstimateList.Format')}
                </p>
                <Input className='!w-full' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[26px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
              <div className='flex w-1/3 justifi-between ml-[30px]'>
                <p className='text-nowrap  w-2/5'>
                  {t('estimatelist:EstimateList.ItemName')}
                </p>
                <Input className='w-full ' />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[26px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
              <div className='flex w-1/3 justifi-between ml-[150px] mr-[40px]'>
                <p className='text-nowrap mr-5'>
                  {t('estimatelist:EstimateList.Situation')}
                </p>
                <Select options={[]} className='w-[100px] !bg-white' />
              </div>
            </div>

            <div className='flex ml-[25px] mt-3'>
              <div className='flex w-2/3'>
                <p className=' text-nowrap w-1/5'>
                  {t('estimatelist:EstimateList.Format')}
                </p>
                <Input className='!w-full mr-[90px]' />
              </div>
            </div>

            <div className='flex ml-[25px] mt-3'>
              <div className='flex w-2/3'>
                <p className=' text-nowrap w-1/5'>
                  {t('estimatelist:EstimateList.Format')}
                </p>
                <div className='flex w-full mr-[100px]'>
                  <Input className='!w-1/3 mr-[30px]' type='date' />
                  <p>~</p>
                  <Input className='!w-1/3 ml-[30px]' type='date' />
                </div>
              </div>
            </div>

            <div className='flex justify-center w-full mt-5'>
              <Buttom
                text={t('estimatelist:EstimateList.Search')}
                className='text-nowrap border bg-[#4472c4] text-white'
              />
            </div>
          </div>
        ) : null}

        <div className='ml-[25px] mt-3'>
          <div
            onClick={() => setShowDataDetails(!showDataDetails)}
            className='flex items-center'
          >
            <p className='font-bold mr-[12px]'>
              {t('estimatelist:EstimateList.ItemDetails')}
            </p>
            <div className='cursor-pointer'>
              {showDataDetails ? <IconsDown /> : <IconsUp />}
            </div>
          </div>
          {showDataDetails ? (
            <>
              {' '}
              <p className='mt-3 mb-2'>{t('estimatelist:EstimateList.Show')}</p>
              <DataTable
                totalPage={4}
                columns={columns}
                data={data}
                className='mr-[40px]'
                forcePage={0}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
