import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/input/input'
import Buttom from '../../../components/buttom/buttom'
import { IconsDelete, IconsSearch } from '../../../assets/icons/icons'
import Select from '../../../components/select/select'
import DataTable from '../../../components/table/table'
import items from '../../../../data/order-slip-entry.json'
import Radio from '../../../components/input/radio'
import { useState } from 'react'
import CustomDatePicker from '../../../components/input/datepicker'

export default function PaymentSlip() {
  const [t] = useTranslation()
  const [data, setData] = useState<any>(items.items)
  const [startDate, setStartDate] = useState(new Date())

  const totalUnitPrice = data.reduce((accumulator: any, currentItem: any) => {
    return accumulator + currentItem.UnitPrice * currentItem.Quantity
  }, 0)
  const totalAmountAfterTax = data.reduce(
    (accumulator: any, currentItem: any) => {
      return (
        accumulator +
        (currentItem.UnitPrice *
          currentItem.Quantity *
          currentItem.TaxClassification) /
          100
      )
    },
    0
  )
  const totalDiscount = data.reduce((accumulator: any, currentItem: any) => {
    return accumulator + currentItem.Discount
  }, 0)

  const addNewRow = () => {
    const newRow = {
      ItemCode: '',
      Model: '',
      ItemName: '',
      Classification: '電子機器',
      Quantity: 0,
      UnitPrice: 0,
      Discount: 0,
      TaxClassification: 0,
      status: '未請求',
      Delete: false,
      Date: '',
    }
    setData([...data, newRow])
  }

  const columns = [
    {
      name: t('paymentslip:PaymentSlip.ItemCode'),
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
      name: t('paymentslip:PaymentSlip.ItemName'),
      key: 'ItemName',
      format: (record: any) => {
        return (
          <div className={'px-2 py-[10px] flex items-center justify-center'}>
            <p className='text-nowrap'>{record.ItemName}</p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('paymentslip:PaymentSlip.DepositCategory'),
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
      name: t('paymentslip:PaymentSlip.Quantity'),
      key: 'Quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('paymentslip:PaymentSlip.Unit'),
      key: 'UnitPrice',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>{record.Unit}</p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('paymentslip:PaymentSlip.UnitPrice'),
      key: 'UnitPrice',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center'}>
            <p className='text-nowrap'>
              ¥{(record.UnitPrice * record.Quantity).toLocaleString('ja-JP')}
            </p>
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('paymentslip:PaymentSlip.AmountOfMoney'),
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
      name: t('paymentslip:PaymentSlip.Delete'),
      key: 'id',
      format: () => {
        return (
          <div className={'flex justify-center'}>
            <IconsDelete />
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
  ]

  return (
    <>
      <Header category={t('sidebar:Sidebar.PaymentSlipEntry')} />
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 pb-[50px]'>
          <div className='bg-gray-100 flex items-center mt-[20px] justify-between'>
            <div className='flex ml-[25px] w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('paymentslip:PaymentSlip.SlipIssueDate')}
              </p>
              <CustomDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </div>
            <div className='flex justify-end w-2/3 mr-[40px]'>
              <Buttom
                text={t('paymentslip:PaymentSlip.NewDocument')}
                className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px] !w-[110px]'
              />
              <Buttom
                text={t('paymentslip:PaymentSlip.ReceiptPrinting')}
                className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px] !w-[110px]'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('paymentslip:PaymentSlip.SalesSlipNumber')}
              </p>
              <div className='flex w-full'>
                <Input
                  isDisabled={true}
                  className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
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
                  {t('paymentslip:PaymentSlip.Domestic')}
                </label>

                <Radio
                  name='location'
                  type='radio'
                  className='!w-3 ml-[20px]'
                />
                <label className='ml-2 text-nowrap'>
                  {t('paymentslip:PaymentSlip.Abroad')}
                </label>
                <div className='flex w-full ml-[30px]'>
                  <div className='flex w-full'>
                    <p className='mr-[10px] text-nowrap '>
                      {t('paymentslip:PaymentSlip.Currency')}
                    </p>
                    <Select options={[]} className='!w-full !bg-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('paymentslip:PaymentSlip.SlipNumber')}
              </p>
              <div className='flex w-full'>
                <Input
                  isDisabled={true}
                  className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'></div>
            <div className='flex w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <p className='min-w-[100px] text-nowrap'>
                  {t('paymentslip:PaymentSlip.CompanyRepresentative')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] flex text-nowrap'>
                {t('paymentslip:PaymentSlip.CustomerCode')}
                <p className='text-red-600'>※</p>
              </p>
              <div className='flex w-full'>
                <Input
                  isDisabled={true}
                  className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
                />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('paymentslip:PaymentSlip.CustomerName')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('paymentslip:PaymentSlip.ContactPerson')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mr-[40px] mt-3'>
            <div className='flex w-1/3 justify-between'>
              <p className=' text-nowrap min-w-[100px]'>
                {t('paymentslip:PaymentSlip.PaymentDay')}
              </p>
              <CustomDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('paymentslip:PaymentSlip.ExchangeRate')}
              </p>
              <Input className='!w-full' />
            </div>
          </div>

          <div className='ml-[25px] mt-3'>
            <p className='text-nowrap font-bold'>
              {t('paymentslip:PaymentSlip.ItemDetails')}
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
              className='text-[10px] h-[36px] border border-gray-200 bg-[#00b0f0] text-white'
              text={t('paymentslip:PaymentSlip.AddLine')}
              onClick={() => addNewRow()}
            />
            <div>
              <div className='mr-10 border border-gray-300 bg-white'>
                <table className='table-auto w-full border-collapse'>
                  <tbody>
                    <tr className='border-b border-gray-200'>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.TotalExcludingTax')}:
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
                        {t('paymentslip:PaymentSlip.Discount')}:
                      </th>
                      <td className='border-l border-gray-300 px-10'>
                        ¥{totalDiscount.toLocaleString('ja-JP')}
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.TotalConsumptionTax')}:
                      </th>
                      <td className='border-l border-gray-300 px-10'>
                        ¥{totalAmountAfterTax.toLocaleString('ja-JP')}
                      </td>
                    </tr>
                    <tr>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.TotalIncludingTax')}:
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
              <div className='mr-10 border border-gray-300 bg-white mt-3'>
                <table className='table-auto w-full border-collapse'>
                  <tbody>
                    <tr className='border-b border-gray-200'>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.DepositAmount')}:
                      </th>
                      <td className='border-l border-gray-300 px-10'>
                        ¥269,500
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.DepositBalance')}:
                      </th>
                      <td className='border-l border-gray-300 px-10'>
                        ¥300,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='mr-10 border border-gray-300 bg-white mt-3'>
                <table className='table-auto w-full border-collapse'>
                  <tbody>
                    <tr className='border-b border-gray-200'>
                      <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                        {t('paymentslip:PaymentSlip.BillingAmount')}:
                      </th>
                      <td className='border-l border-gray-300 px-10'>
                        ¥569,500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className=' ml-[25px] mr-[40px] mt-6'>
            <p className='min-w-[100px] text-nowrap font-bold'>
              {t('paymentslip:PaymentSlip.Remarks')}
            </p>
            <textarea className='w-full h-[200px] border border-gray-200 mt-2 px-2 py-2'></textarea>
          </div>

          <div className=' ml-[25px] mr-[40px] mt-6 flex'>
            <Buttom
              text={t('paymentslip:PaymentSlip.Keep')}
              className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
            />
            <Buttom
              text={t('paymentslip:PaymentSlip.Delete')}
              className='text-nowrap border bg-[#757070] text-white ml-2'
            />
          </div>
        </div>
      </div>
    </>
  )
}
