import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Buttom from '../../../components/buttom/buttom'
import Input from '../../../components/input/input'
import Radio from '../../../components/input/radio'
import Select from '../../../components/select/select'
import { IconsSearch, IconsDelete } from '../../../assets/icons/icons'
import DataTable from '../../../components/table/table'
import items from '../../../../data/purchase-order.json'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function PurchaseOrder() {
  const [t] = useTranslation()
  const [data, setData] = useState<any>(items)
  const [startDate, setStartDate] = useState(new Date())

  const addNewRow = () => {
    const newRow = {
      code: '',
      item_code: '',
      item_name: '',
      category: '',
      unit_price: 0,
      quantity: 0,
      minimum: 0,
      order_quantity: 0,
      delivery_quantity: 0,
      slip: '',
    }
    setData([...data, newRow])
  }

  const columns = [
    {
      name: t('purchaseorder:PurchaseOrder.ItemCode'),
      key: 'code',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <p className='text-nowrap'>{record.code}</p>
            <IconsSearch />
          </div>
        )
      },
    },
    {
      name: t('purchaseorder:PurchaseOrder.Model'),
      key: 'item_code',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <p className='text-nowrap'>{record.item_code}</p>
            <IconsSearch />
          </div>
        )
      },
    },
    {
      name: t('purchaseorder:PurchaseOrder.ItemName'),
      key: 'item_name',
      format: (record: any) => {
        return (
          <div
            className={
              'px-2 py-[10px] flex items-center justify-center bg-gray-200'
            }
          >
            <p className='text-nowrap'>{record.item_name}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.Classification'),
      key: 'category',
      format: (record: any) => {
        return (
          <div
            className={
              'px-2 py-[10px] flex items-center justify-center bg-gray-200'
            }
          >
            <p className='text-nowrap'>{record.category}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.Unit'),
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
      name: t('purchaseorder:PurchaseOrder.UnitPrice'),
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
      className: 'text-center',
    },
    {
      name: t('purchaseorder:PurchaseOrder.Minimum'),
      key: 'quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.OrderQuantity'),
      key: 'order_quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.NumberOfDeliveries'),
      key: 'delivery_quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.Order'),
      key: 'minimum',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.TaxClassification'),
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
      name: t('purchaseorder:PurchaseOrder.Slip'),
      key: 'slip',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchaseorder:PurchaseOrder.Delete'),
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
        <Header category={t('sidebar:Sidebar.PurchaseOrderEntry')} />
      </div>
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between'>
          <div className='flex ml-[25px] w-1/5'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseorder:PurchaseOrder.Status')}
            </p>
            <Buttom
              className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              text='未締切'
            />
          </div>
          <div className='flex justify-end w-3/4 mr-[40px]'>
            <Buttom
              text={t('purchaseorder:PurchaseOrder.ApprovalRequest')}
              className='text-nowrap border border-yellow-500 text-yellow-500 mr-[20px]'
            />
            <Buttom
              text={t('purchaseorder:PurchaseOrder.Approval')}
              className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px]'
            />
            <Buttom
              text={t('purchaseorder:PurchaseOrder.NotApproved')}
              className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px]'
            />
            <Buttom
              text={t('purchaseorder:PurchaseOrder.CostReference')}
              className='text-nowrap border border-[#00b0f0] text-[#00b0f0] mr-[20px]'
            />
            <Buttom
              text={t('purchaseorder:PurchaseOrder.NewDocument')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-[20px]'
            />
            <Buttom
              text={t('purchaseorder:PurchaseOrder.PurchaseProcessing')}
              className='text-nowrap border border-cyan-500 text-cyan-500 mr-[20px]'
            />{' '}
            <Buttom
              text={t('purchaseorder:PurchaseOrder.OrderFormPrinting')}
              className='text-nowrap border border-orange-500 text-orange-500'
            />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseorder:PurchaseOrder.PurchaseOrderSlip')}
            </p>
            <div className='flex w-full'>
              <Buttom
                text={t('purchaseorder:PurchaseOrder.ChildNumber')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.ChildNumber')}
              <p className='text-red-600'>※</p>
            </p>
            <div className='flex w-full'>
              <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchaseorder:PurchaseOrder.TransactionCategory')}
            </p>
            <div className='flex w-full'>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <Radio name='location' type='radio' className='!w-3' check={true} />
            <label className='ml-2 text-nowrap'>
              {t('purchaseorder:PurchaseOrder.Domestic')}
            </label>

            <Radio name='location' type='radio' className='!w-3 ml-[20px]' />
            <label className='ml-2 text-nowrap'>
              {t('purchaseorder:PurchaseOrder.Abroad')}
            </label>
            <div className='flex ml-[30px] w-full'>
              <div className='flex w-full'>
                <p className='mr-[10px] text-nowrap '>
                  {t('purchaseorder:PurchaseOrder.Currency')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('purchaseorder:PurchaseOrder.CompanyRepresentative')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.SupplierCode')}
              <p className='text-red-600'>※</p>
            </p>
            <div className='flex w-full'>
              <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('purchaseorder:PurchaseOrder.SupplierName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('purchaseorder:PurchaseOrder.SupplierContact')}
              </p>
              <Buttom
                text='Ul123'
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.PayeeCode')}
              <p className='text-red-600'>※</p>
            </p>
            <div className='flex w-full'>
              <Input className='text-[10px]' />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('purchaseorder:PurchaseOrder.PayeeName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.OrderDate')}
              <p className='text-red-600'>※</p>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.PurchaseOrderIssueDate')}
              <p className='text-red-600'>※</p>
            </p>
            <div className='flex w-full'>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                dateFormat='yyyy-MM-dd'
              />
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchaseorder:PurchaseOrder.StockDate')}
              <p className='text-red-600'>※</p>
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

        <div className='ml-[25px] mt-3'>
          <p className='font-bold'>
            {t('purchaseorder:PurchaseOrder.ItemDetails')}
          </p>
          <DataTable
            totalPage={0}
            columns={columns}
            data={data}
            className='mr-[40px]'
          />
        </div>
        <div className='flex justify-between ml-[25px] mt-6'>
          <Buttom
            className='text-[10px] h-[24px] border border-blue-200 bg-[#00b0f0] text-white !py-0 !rounded-[3px] !w-[150px]'
            text={t('purchaseorder:PurchaseOrder.AddItemLine')}
            onClick={() => addNewRow()}
          />
          <div className='mr-10 border border-gray-300 bg-white'>
            <table className='table-auto w-full border-collapse'>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseorder:PurchaseOrder.OrderAmount')}:
                  </th>
                  <td className='font-bold border-l border-gray-300 px-10'>
                    ¥572,000
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseorder:PurchaseOrder.TotalExcludingTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>¥520,000</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseorder:PurchaseOrder.TotalConsumptionTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>¥51,600</td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('purchaseorder:PurchaseOrder.TotalIncludingTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>¥572,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6'>
          <p className='min-w-[130px] font-bold'>
            {t('purchaseorder:PurchaseOrder.Remarks')}
          </p>
          <textarea className='w-full h-[200px] border border-blue-200 mt-2 px-2 py-2'></textarea>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6 flex'>
          <Buttom
            text={t('purchaseorder:PurchaseOrder.Update')}
            className='text-nowrap border bg-[#4472c4] text-white'
          />
          <Buttom
            text={t('purchaseorder:PurchaseOrder.Delete')}
            className='text-nowrap border bg-red-500 text-white ml-2'
          />
        </div>
      </div>
    </>
  )
}
