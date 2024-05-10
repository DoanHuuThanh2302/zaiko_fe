import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsSearch } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import items from '../../../../data/order-slip-entry.json'
import Radio from '../../../components/input/radio'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function SaleSlipEntry() {
  const [t] = useTranslation()
  const data = items.items
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

  const columns = [
    {
      name: 'No.',
      key: 'name',
      className: 'text-center',
    },
    {
      name: t('saleslipentry:SaleSlipEntry.ItemCode'),
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
      name: t('saleslipentry:SaleSlipEntry.Model'),
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
      name: t('saleslipentry:SaleSlipEntry.ItemName'),
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
      name: t('saleslipentry:SaleSlipEntry.Classification'),
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
      name: t('saleslipentry:SaleSlipEntry.Quantity'),
      key: 'Quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('saleslipentry:SaleSlipEntry.Unit'),
      key: 'Unit',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <Select
              id='a1'
              options={[{ value: '1', label: '台' }]}
              className=' ! bg-white'
              placeholder='台'
            />
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('saleslipentry:SaleSlipEntry.UnitPrice'),
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
      name: t('saleslipentry:SaleSlipEntry.Discount'),
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
      name: t('saleslipentry:SaleSlipEntry.TaxClassification'),
      key: 'TaxClassification',
      format: () => {
        return (
          <div className={'px-2 flex items-center justify-between'}>
            <Select
              id='a1'
              options={[{ value: '1', label: '台' }]}
              className=' ! bg-white'
              placeholder='台'
            />
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('saleslipentry:SaleSlipEntry.DeliveryDate'),
      key: 'Date',
      className: 'text-center text-nowrap',
    },
  ]

  return (
    <>
      <Header category={t('sidebar:Sidebar.SalesSlipEntry')} />
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 pb-[50px]'>
          <div className='bg-gray-100 flex items-center h-[80px] justify-between'>
            <div className='flex ml-[25px] w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.Status')}
              </p>
              <Buttom
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
                text='未締切'
              />
            </div>
            <div className='flex justify-end w-2/3 mr-[40px]'>
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.NewDocument')}
                className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.AkadenProcessing')}
                className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.DepositProcessing')}
                className='text-nowrap border border-[#00b0f0] text-[#00b0f0] mr-[20px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.DeliveryNotePrinting')}
                className='text-nowrap border border-[#4472c4] text-[#4472c4] mr-[20px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.InvoicePrinting')}
                className='text-nowrap border border-cyan-500 text-cyan-500'
              />
            </div>
          </div>

          <div className='bg-gray-100 flex items-center justify-end'>
            <div className='flex justify-end w-2/3 mr-[40px]'>
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.ApprovalRequest')}
                className='text-nowrap border border-yellow-500 text-yellow-500 mr-[30px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.Approval')}
                className='text-nowrap border border-amber-500 text-amber-500 mr-[30px]'
              />
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.NotApproved')}
                className='text-nowrap border border-teal-500 text-teal-500'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mr-[40px] mt-3'>
            <div className='flex w-1/3 justify-between'>
              <p className=' text-nowrap min-w-[100px]'>
                {t('saleslipentry:SaleSlipEntry.SlipIssueDate')}
              </p>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                dateFormat='yyyy-MM-dd'
              />
            </div>
            <div className='flex w-1/3 justifi-between pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.OrderDate')}
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
              <p className=' text-nowrap min-w-[100px]'>
                {t('saleslipentry:SaleSlipEntry.ExpectedShippingDate')}
              </p>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                dateFormat='yyyy-MM-dd'
              />
            </div>
            <div className='flex w-1/3 justifi-between pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.ScheduledBillingDate')}
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
                {t('saleslipentry:SaleSlipEntry.SalesOrderNumber')}
              </p>
              <div className='flex w-full'>
                <Buttom
                  text={t('saleslipentry:SaleSlipEntry.Domestic')}
                  className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
                />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className=' w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <Radio
                  name='location'
                  type='radio'
                  className='!w-3'
                  check={true}
                />
                <label className='ml-2 text-nowrap'>
                  {t('saleslipentry:SaleSlipEntry.Domestic')}
                </label>

                <Radio
                  name='location'
                  type='radio'
                  className='!w-3 ml-[20px]'
                />
                <label className='ml-2 text-nowrap'>
                  {t('saleslipentry:SaleSlipEntry.Abroad')}
                </label>
                <div className='flex w-full ml-[30px]'>
                  <div className='flex w-full'>
                    <p className='mr-[10px] text-nowrap '>
                      {t('saleslipentry:SaleSlipEntry.Currency')}
                    </p>
                    <Select options={[]} className='!w-full !bg-white' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 pl-[30px]'>
              <div className='flex'>
                <p className='min-w-[100px] text-nowrap'>
                  {t('saleslipentry:SaleSlipEntry.TransactionClassification')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.SlipNumber')}
              </p>
              <div className='flex w-full'>
                <Buttom
                  text={t('saleslipentry:SaleSlipEntry.SlipNumber')}
                  className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
                />
                <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('saleslipentry:SaleSlipEntry.ChildNumber')}
              </p>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <p className='min-w-[100px] text-nowrap'>
                  {t('saleslipentry:SaleSlipEntry.CompanyRepresentative')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] flex text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.CustomerCode')}
                <p className='text-red-600'>※</p>
              </p>
              <div className='flex w-full'>
                <Buttom
                  text={t('saleslipentry:SaleSlipEntry.ChildNumber')}
                  className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('saleslipentry:SaleSlipEntry.CustomerName')}
              </p>
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.ChildNumber')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.ContactPerson')}
              </p>
              <Buttom
                text={t('saleslipentry:SaleSlipEntry.ChildNumber')}
                className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.DeliveryCode')}
              </p>
              <div className='flex w-full'>
                <Buttom
                  text={t('saleslipentry:SaleSlipEntry.DeliveryCode')}
                  className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('saleslipentry:SaleSlipEntry.DeliveryName')}
              </p>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.DeliveryPersonInCharge')}
              </p>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6' />
              <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
              <p className='text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.SameAsBusinessPartner')}
              </p>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] flex no-wrap'>
                {t('saleslipentry:SaleSlipEntry.BillingCode')}
                <p className='text-red-600'>※</p>
              </p>
              <div className='flex w-full'>
                <Buttom
                  text={t('saleslipentry:SaleSlipEntry.DeliveryCode')}
                  className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('saleslipentry:SaleSlipEntry.BillingName')}
              </p>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.BillingContact')}
              </p>
              <Buttom className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6' />
              <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
              <p className='text-nowrap'>
                {t('saleslipentry:SaleSlipEntry.SameAsBusinessPartner')}
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

          <div className='ml-[25px] mt-3'>
            <p className='text-nowrap font-bold'>
              {t('saleslipentry:SaleSlipEntry.ItemDetails')}
            </p>
            <DataTable
              totalPage={0}
              columns={columns}
              data={data}
              className='mr-[40px]'
            />
          </div>

          <div className='flex justify-end ml-[25px] mt-6'>
            <div className='mr-10 border border-gray-300 bg-white'>
              <table className='table-auto w-full border-collapse'>
                <tbody>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('saleslipentry:SaleSlipEntry.BillingAmount')}:
                    </th>
                    <td className='font-bold border-l border-gray-300 px-10'>
                      ¥
                      {(
                        totalAmountAfterTax +
                        totalDiscount +
                        totalUnitPrice
                      ).toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('saleslipentry:SaleSlipEntry.TotalExcludingTax')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalUnitPrice.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('saleslipentry:SaleSlipEntry.discount')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalDiscount.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('saleslipentry:SaleSlipEntry.TotalConsumptionTax')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalAmountAfterTax.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('saleslipentry:SaleSlipEntry.TotalIncludingTax')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥
                      {(totalAmountAfterTax + totalUnitPrice).toLocaleString(
                        'ja-JP'
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=' ml-[25px] mr-[40px] mt-6'>
            <p className='min-w-[100px] text-nowrap font-bold'>
              {t('saleslipentry:SaleSlipEntry.Remarks')}
            </p>
            <textarea className='w-full h-[200px] border border-blue-200 mt-2 px-2 py-2'></textarea>
          </div>

          <div className=' ml-[25px] mr-[40px] mt-6 flex'>
            <Buttom
              text={t('saleslipentry:SaleSlipEntry.Keep')}
              className='text-nowrap border bg-[#4472c4] text-white'
            />
            <Buttom
              text={t('saleslipentry:SaleSlipEntry.Delete')}
              className='text-nowrap border bg-[#757070] text-white ml-2'
            />
          </div>
        </div>
      </div>
    </>
  )
}
