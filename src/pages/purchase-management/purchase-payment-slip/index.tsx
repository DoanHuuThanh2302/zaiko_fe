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
import CustomDatePicker from '../../../components/input/datepicker'

export default function PurchasePaymentSlip() {
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.ItemCode'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.Model'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.ItemName'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.Classification'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.Unit'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.UnitPrice'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.Minimum'),
      key: 'quantity',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchasepaymentslip:PurchasePaymentSlip.Quantity'),
      key: 'order_quantity',
      className: 'text-center text-nowrap w-[50px]',
    },
    {
      name: t('purchasepaymentslip:PurchasePaymentSlip.TaxClassification'),
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
      name: t('purchasepaymentslip:PurchasePaymentSlip.Situation'),
      key: 'slip',
      className: 'text-center text-nowrap',
    },
    {
      name: t('purchasepaymentslip:PurchasePaymentSlip.Delete'),
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
        <Header category={t('sidebar:Sidebar.Receipt/PaymentSlipEntry')} />
      </div>
      <div className='bg-gray-100 pb-[50px]'>
        <div className='flex ml-[25px] mt-10 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchasepaymentslip:PurchasePaymentSlip.PurchaseSlipNumber')}
            </p>
            <div className='flex w-full'>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
              />
              <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'></div>
          <div className='flex w-1/3 pl-[30px]'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t(
                'purchasepaymentslip:PurchasePaymentSlip.CompanyRepresentative'
              )}
            </p>
            <div className='flex w-full'>
              <Select
                options={[]}
                className='text-nowrap border border-gray-200 !bg-white text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
              />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap'>
              {t('purchasepaymentslip:PurchasePaymentSlip.SlipNumber')}
            </p>
            <div className='flex w-full'>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]'
              />
              <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                <IconsSearch />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <Radio name='location' type='radio' className='!w-3' check={true} />
            <label className='ml-2 text-nowrap'>
              {t('purchasepaymentslip:PurchasePaymentSlip.Domestic')}
            </label>

            <Radio name='location' type='radio' className='!w-3 ml-[20px]' />
            <label className='ml-2 text-nowrap'>
              {t('purchasepaymentslip:PurchasePaymentSlip.Abroad')}
            </label>
            <div className='flex ml-[30px] w-full'>
              <div className='flex w-full'>
                <p className='mr-[10px] text-nowrap '>
                  {t('purchasepaymentslip:PurchasePaymentSlip.Currency')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('purchasepaymentslip:PurchasePaymentSlip.PaymentCategory')}
              </p>
              <Select options={[]} className='!w-full !bg-white' />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchasepaymentslip:PurchasePaymentSlip.SupplierCode')}
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
              {t('purchasepaymentslip:PurchasePaymentSlip.SupplierName')}
            </p>
            <Input
              isDisabled={true}
              className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
            />
          </div>
          <div className='flex w-1/3 pl-[30px]'>
            <div className='flex w-full'>
              <p className='min-w-[100px] text-nowrap'>
                {t('purchasepaymentslip:PurchasePaymentSlip.ContactPerson')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3 mr-[40px]'>
          <div className='flex w-1/3'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchasepaymentslip:PurchasePaymentSlip.DateOfPayment')}
            </p>
            <CustomDatePicker
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </div>
          <div className='flex w-1/3  pl-[30px]'>
            <p className='min-w-[100px] text-nowrap flex'>
              {t('purchasepaymentslip:PurchasePaymentSlip.ExchangeRate')}
            </p>
            <div className='flex w-full'>
              <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
            </div>
          </div>
        </div>

        <div className='ml-[25px] mt-3'>
          <p className='font-bold'>
            {t('purchasepaymentslip:PurchasePaymentSlip.ItemDetails')}
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
            text={t('purchasepaymentslip:PurchasePaymentSlip.AddItemLine')}
            onClick={() => addNewRow()}
          />
          <div>
            <div className='mr-10 border border-gray-300 bg-white'>
              <table className='table-auto w-full border-collapse'>
                <tbody>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.TotalExcludingTax'
                      )}
                      :
                    </th>
                    <td className='border-l border-gray-300 px-10'>¥520,000</td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.TotalConsumptionTax'
                      )}
                      :
                    </th>
                    <td className='border-l border-gray-300 px-10'>¥51,600</td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.TotalIncludingTax'
                      )}
                      :
                    </th>
                    <td className='border-l font-bold  border-gray-300 px-10'>
                      ¥572,000
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
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.PurchaseAmount'
                      )}
                      :
                    </th>
                    <td className='border-l border-gray-300 px-10'>¥131,200</td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.PaymentAmount'
                      )}
                      :
                    </th>
                    <td className='border-l border-gray-300 px-10'>¥132,200</td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t(
                        'purchasepaymentslip:PurchasePaymentSlip.PaymentBalance'
                      )}
                      :
                    </th>
                    <td className='border-l border-gray-300 px-10'>¥1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6'>
          <p className='min-w-[130px] font-bold'>
            {t('purchasepaymentslip:PurchasePaymentSlip.Remarks')}
          </p>
          <textarea className='w-full h-[200px] border border-gray-200 mt-2 px-2 py-2'></textarea>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6 flex'>
          <Buttom
            text={t('purchasepaymentslip:PurchasePaymentSlip.Update')}
            className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
          />
          <Buttom
            text={t('purchasepaymentslip:PurchasePaymentSlip.Delete')}
            className='text-nowrap border bg-red-500 text-white ml-2'
          />
        </div>
      </div>
    </>
  )
}
