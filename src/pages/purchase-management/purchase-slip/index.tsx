import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Buttom from '../../../components/buttom/buttom'
import Input from '../../../components/input/input'
import Radio from '../../../components/input/radio'
import Select from '../../../components/select/select'
import { IconsSearch, IconsDelete } from '../../../assets/icons/icons'
import DataTable from '../../../components/table/table'
import items from '../../../../data/quotation.json'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function PurchaseSlip() {
  const [t] = useTranslation()
  const [data, setData] = useState<any>(items.items)
  const [startDate, setStartDate] = useState(new Date())

  const addNewRow = () => {
    const newRow = {
      ItemCode: '',
      Model: '',
      ItemName: 'ワイヤレスイヤホン',
      Classification: '電子機器',
      Quantity: 0,
      UnitPrice: 0,
      Discount: 0,
      Delete: false,
    }
    setData([...data, newRow])
  }

  const columns = [
    {
      name: t('purchaseslip:PurchaseSlip.ItemCode'),
      key: 'ItemCode',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <p className='text-nowrap'>{record.ItemCode}</p>
            <IconsSearch />
          </div>
        )
      },
    },
    {
      name: t('purchaseslip:PurchaseSlip.Model'),
      key: 'Model',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <p className='text-nowrap'>{record.Model}</p>
            <IconsSearch />
          </div>
        )
      },
    },
    {
      name: t('purchaseslip:PurchaseSlip.ItemName'),
      key: 'ItemName',
      format: (record: any) => {
        return (
          <div
            className={
              'px-2 py-[10px] flex items-center justify-center bg-gray-200'
            }
          >
            <p className='text-nowrap'>{record.ItemName}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Classification'),
      key: 'Classification',
      format: (record: any) => {
        return (
          <div
            className={
              'px-2 py-[10px] flex items-center justify-center bg-gray-200'
            }
          >
            <p className='text-nowrap'>{record.Classification}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Unit'),
      key: 'Unit',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <Select
              id='a1'
              options={[{ value: '1', label: '台' }]}
              className='w-full !bg-white'
              placeholder='台'
            />
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.UnitPrice'),
      key: 'UnitPrice',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.UnitPrice.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Minimum'),
      key: 'Quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Quantity'),
      key: 'Quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseslip:PurchaseSlip.TaxClassification'),
      key: 'TaxClassification',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <Select
              id='a1'
              options={[{ value: '1', label: '8' }]}
              className='w-full !bg-white'
              placeholder='外税'
            />
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Situation'),
      key: 'Situation',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap underline text-[#2e75b5]'>未納</p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.WarehouseNumber'),
      key: 'WarehouseNumber',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'></p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.ShelfBin'),
      key: 'ShelfBin',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'></p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Remarks'),
      key: 'Remarks',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'></p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('purchaseslip:PurchaseSlip.Delete'),
      key: 'id',
      format: () => {
        return (
          <div className={'flex justify-center'}>
            <IconsDelete />
          </div>
        )
      },
      className: 'w-[50px] text-nowrap',
    },
  ]

  return (
    <>
      <div>
        <Header category={t('sidebar:Sidebar.PurchaseSlipEntry')} />
      </div>
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-end'>
          <div className='flex justify-end w-2/3 mr-[40px]'>
            <Buttom
              text={t('purchaseslip:PurchaseSlip.NewDocument')}
              className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px]'
            />
            <Buttom
              text={t('purchaseslip:PurchaseSlip.PaymentProcessing')}
              className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px]'
            />
            <Buttom
              text={t('purchaseslip:PurchaseSlip.AkadenProcessing')}
              className='text-nowrap border border-[#00b0f0] text-[#00b0f0] mr-[20px]'
            />
          </div>
        </div>
        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseslip:PurchaseSlip.PurchaseOrderNumber')}
            </p>
            <div className='flex w-full'>
              <Buttom
                text={t('purchaseslip:PurchaseSlip.Domestic')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
              />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-2/3 pl-[30px]'>
            <Radio name='location' type='radio' className='!w-3' check={true} />
            <label className='ml-2 text-nowrap'>
              {t('purchaseslip:PurchaseSlip.Domestic')}
            </label>
            <Radio name='location' type='radio' className='!w-3 ml-[20px]' />
            <label className='ml-2 text-nowrap'>
              {t('purchaseslip:PurchaseSlip.Abroad')}
            </label>
            <div className='flex w-1/2 ml-[30px]'>
              <div className='flex w-full'>
                <p className='mr-[10px] text-nowrap '>
                  {t('purchaseslip:PurchaseSlip.Currency')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>

            <div className='flex w-1/2'>
              <p className='text-nowrap px-2'>
                {t('purchaseslip:PurchaseSlip.TransactionClassification')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
            <div className='flex w-1/2'>
              <p className='text-nowrap px-2'>
                {t('purchaseslip:PurchaseSlip.CompanyRepresentative')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
        </div>
        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseslip:PurchaseSlip.SlipNumber')}
            </p>
            <div className='flex w-full'>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('purchaseslip:PurchaseSlip.ChildNumber')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
        </div>
        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseslip:PurchaseSlip.SupplierCode')}
            </p>
            <div className='flex w-full'>
              <Buttom
                text={t('purchaseslip:PurchaseSlip.SupplierName')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
              />
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('purchaseslip:PurchaseSlip.SupplierName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseslip:PurchaseSlip.SupplierContact')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] flex no-wrap'>
              {t('purchaseslip:PurchaseSlip.PayeeCode')}
            </p>
            <div className='flex w-full'>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('purchaseslip:PurchaseSlip.PayeeName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
        </div>
        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3 justify-between'>
            <p className=' text-nowrap min-w-[100px]'>
              {t('purchaseslip:PurchaseSlip.PurchaseDate')}
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap'></p>
            <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
            <p className='text-nowrap'>
              {t('purchaseslip:PurchaseSlip.NoReceiptOrPayment')}
            </p>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('purchaseslip:PurchaseSlip.ReceiptPaymentClassification')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
        </div>
        <div className='ml-[25px] mt-3'>
          <p className='font-bold'>
            {t('purchaseslip:PurchaseSlip.ItemDetails')}
          </p>
          <DataTable
            totalPage={4}
            columns={columns}
            data={data}
            className='mr-[40px]'
          />
        </div>
        <div className='flex justify-between ml-[25px] mt-6'>
          <Buttom
            className='text-[10px] h-[24px] border border-blue-200 bg-[#00b0f0] text-white !py-0 !rounded-[3px] !w-[150px]'
            text={t('purchaseslip:PurchaseSlip.AddItemLine')}
            onClick={() => addNewRow()}
          />
          <div className='mr-10 border border-gray-300 bg-white'>
            <table className='table-auto w-full border-collapse'>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseslip:PurchaseSlip.TotalExcludingTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>¥390,000</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseslip:PurchaseSlip.TotalConsumptionTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>¥39,000</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseslip:PurchaseSlip.TotalIncludingTax')}:
                  </th>
                  <td className='font-bold border-l border-gray-300 px-10'>
                    ¥426,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=' ml-[25px] mr-[40px] mt-6'>
          <p className='min-w-[130px] font-bold'>
            {t('purchaseslip:PurchaseSlip.Remarks')}
          </p>
          <textarea className='w-full h-[200px] border border-blue-200 mt-2 px-2 py-2'></textarea>
        </div>
        <div className=' ml-[25px] mr-[40px] mt-6 flex'>
          <Buttom
            text={t('purchaseslip:PurchaseSlip.Update')}
            className='text-nowrap border bg-[#4472c4] text-white'
          />
          <Buttom
            text={t('purchaseslip:PurchaseSlip.Delete')}
            className='text-nowrap border bg-[#757070] text-white ml-2'
          />
        </div>
      </div>
    </>
  )
}
