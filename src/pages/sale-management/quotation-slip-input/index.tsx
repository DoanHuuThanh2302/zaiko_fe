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

export default function Quotation() {
  const [t] = useTranslation()
  const [data, setData] = useState(items.items)
  const [startDate, setStartDate] = useState(new Date())
  const totalUnitPrice = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.UnitPrice * currentItem.Quantity
  }, 0)
  const totalAmountAfterTax = data.reduce((accumulator, currentItem) => {
    return (
      accumulator +
      (currentItem.UnitPrice *
        currentItem.Quantity *
        currentItem.TaxClassification) /
        100
    )
  }, 0)
  const totalDiscount = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.Discount
  }, 0)

  const addNewRow = () => {
    const newRow = {
      ItemCode: '',
      Model: '',
      ItemName: 'ワイヤレスイヤホン',
      Classification: '電子機器',
      Quantity: 0,
      Unit: '',
      UnitPrice: 0,
      Discount: 0,
      TaxClassification: 0,
      Delete: false,
    }
    setData([...data, newRow])
  }

  const columns = [
    {
      name: 'No.',
      key: 'name',
      className: 'text-center',
    },
    {
      name: t('quotation:Quotation.ItemCode'),
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
      name: t('quotation:Quotation.Model'),
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
      name: t('quotation:Quotation.ItemName'),
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
      name: t('quotation:Quotation.Classification'),
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
      name: t('quotation:Quotation.Quantity'),
      key: 'Quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('quotation:Quotation.Unit'),
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
      name: t('quotation:Quotation.UnitPrice'),
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
      name: t('quotation:Quotation.discount'),
      key: 'Discount',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{record.Discount.toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('quotation:Quotation.TaxClassification'),
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
      name: t('quotation:Quotation.Delete'),
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
        <Header category={t('sidebar:Sidebar.QuotationSlipInput')} />
      </div>
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 flex items-center h-[80px] justify-between'>
          <div className='flex ml-[25px] w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('quotation:Quotation.Status')}
            </p>
            <Buttom
              className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              text='未締切'
            />
          </div>
          <div className='flex justify-end w-2/3 mr-[40px]'>
            <Buttom
              text={t('quotation:Quotation.ApprovalRequest')}
              className='text-nowrap border border-orange-500 text-orange-500 mr-[20px]'
            />
            <Buttom
              text={t('quotation:Quotation.Approval')}
              className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px]'
            />
            <Buttom
              text={t('quotation:Quotation.NotApproved')}
              className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px]'
            />
            <Buttom
              text={t('quotation:Quotation.CostReference')}
              className='text-nowrap border border-[#00b0f0] text-[#00b0f0] mr-[20px]'
            />
            <Buttom
              text={t('quotation:Quotation.NewDocument')}
              className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-[20px]'
            />
            <Buttom
              text={t('quotation:Quotation.QuotePrinting')}
              className='text-nowrap border border-cyan-500 text-cyan-500'
            />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3 justify-between'>
            <p className=' text-nowrap min-w-[100px]'>
              {t('quotation:Quotation.SlipIssueDate')}
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('quotation:Quotation.SlipNumber')}
            </p>
            <div className='flex w-full'>
              <Buttom
                text={t('quotation:Quotation.Domestic')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-2/3 pl-[30px]'>
            <Radio name='location' type='radio' className='!w-3' check={true} />
            <label className='ml-2 text-nowrap'>
              {t('quotation:Quotation.Domestic')}
            </label>

            <Radio name='location' type='radio' className='!w-3 ml-[20px]' />
            <label className='ml-2 text-nowrap'>
              {t('quotation:Quotation.Abroad')}
            </label>
            <div className='flex w-1/2 ml-[30px]'>
              <div className='flex w-full'>
                <p className='mr-[10px] text-nowrap '>
                  {t('quotation:Quotation.Currency')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>

            <div className='flex w-1/2'>
              <p className='text-nowrap px-2'>
                {t('quotation:Quotation.TransactionCategory')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
            <div className='flex w-1/2'>
              <p className='text-nowrap px-2'>
                {t('quotation:Quotation.CompanyRepresentative')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('quotation:Quotation.CustomerCode')}
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
              {t('quotation:Quotation.CustomerName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('quotation:Quotation.ContactPerson')}
              </p>
              <Buttom
                text={t('quotation:Quotation.DeliveryCode')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('quotation:Quotation.DeliveryCode')}
            </p>
            <div className='flex w-full'>
              <Buttom
                text={t('quotation:Quotation.DeliveryCode')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('quotation:Quotation.DeliveryName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap'>
              {t('quotation:Quotation.DeliveryPersonInCharge')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6' />
            <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
            <p className='text-nowrap'>
              {t('quotation:Quotation.SameAsBusinessPartner')}
            </p>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] flex no-wrap'>
              {t('quotation:Quotation.BillingCode')}
              <p className='text-red-600'>※</p>
            </p>
            <div className='flex w-full'>
              <Input className='text-nowrap border border-blue-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
              <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px] ]'>
            <p className='min-w-[100px] text-nowrap '>
              {t('quotation:Quotation.BillingName')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap'>
              {t('quotation:Quotation.BillingContact')}
            </p>
            <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6' />
            <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
            <p className='text-nowrap'>
              {t('quotation:Quotation.SameAsBusinessPartner')}
            </p>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-2/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('estimatelist:EstimateList.Subject')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='!w-full' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3 justify-between'>
            <p className=' text-nowrap min-w-[100px] flex'>
              {t('quotation:Quotation.EstimatedDate')}
              <p className='text-red-600'>※</p>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3 justify-between'>
            <p className=' text-nowrap min-w-[100px] flex'>
              {t('quotation:Quotation.Deadline')}
              <p className='text-red-600'>※</p>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat='yyyy-MM-dd'
            />
          </div>
        </div>

        <div className='ml-[25px] mt-3'>
          <p className='font-bold'>{t('quotation:Quotation.ItemDetails')}</p>
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
            text={t('quotation:Quotation.AddItemLine')}
            onClick={() => addNewRow()}
          />
          <div className='mr-10 border border-gray-300 bg-white'>
            <table className='table-auto w-full border-collapse'>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('quotation:Quotation.EstimatedAmount')}:
                  </th>
                  <td className='font-bold border-l border-gray-300 px-10'>
                    ¥
                    {(
                      totalUnitPrice +
                      totalDiscount +
                      totalAmountAfterTax
                    ).toLocaleString('ja-JP')}
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('quotation:Quotation.TotalExcludingTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>
                    ¥{totalUnitPrice.toLocaleString('ja-JP')}
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('quotation:Quotation.discount')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>
                    ¥{totalDiscount.toLocaleString('ja-JP')}
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                    {t('quotation:Quotation.TotalConsumptionTax')}:
                  </th>
                  <td className='border-l border-gray-300 px-10'>
                    ¥{totalAmountAfterTax.toLocaleString('ja-JP')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6'>
          <p className='min-w-[130px] font-bold'>
            {t('quotation:Quotation.Remarks')}
          </p>
          <textarea className='w-full h-[200px] border border-blue-200 mt-2 px-2 py-2'></textarea>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6 flex'>
          <Buttom
            text={t('quotation:Quotation.Keep')}
            className='text-nowrap border bg-[#4472c4] text-white'
          />
          <Buttom
            text={t('quotation:Quotation.Delete')}
            className='text-nowrap border bg-[#757070] text-white ml-2'
          />
        </div>
      </div>
    </>
  )
}
