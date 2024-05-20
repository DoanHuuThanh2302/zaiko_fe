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
import Modal from '../../../components/modal/modal'
import CustomDatePicker from '../../../components/input/datepicker'

export default function OrderSlipEntry() {
  const [t] = useTranslation()
  const [data, setData] = useState(items.items)
  const [startDate, setStartDate] = useState(new Date())

  const [showListOfRecipients, setShowListOfRecipients] = useState(false)
  const closeModalShowListOfRecipients = () => {
    setShowListOfRecipients(false)
  }

  const listOfRecipients = [
    {
      choice: 1,
      quantity: 2,
      AssigneeCode: 'JPN-001',
      AccountName: '倉庫エリアA',
    },
    {
      choice: 2,
      quantity: 6,
      AssigneeCode: 'JPN-002',
      AccountName: '倉庫エリアB',
    },
  ]

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
      status: '未請求',
      Delete: false,
      Date: '',
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
      name: t('orderslipentry:OrderSlipEntry.ItemCode'),
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
      name: t('orderslipentry:OrderSlipEntry.Model'),
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
      name: t('orderslipentry:OrderSlipEntry.ItemName'),
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
      name: t('orderslipentry:OrderSlipEntry.Classification'),
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
      name: t('orderslipentry:OrderSlipEntry.Quantity'),
      key: 'Quantity',
      format: (record: any) => {
        return (
          <div
            className={'px-2 flex items-center justify-center cursor-pointer'}
          >
            <p
              className='text-nowrap text-[#00b0f0] underline'
              onClick={() => setShowListOfRecipients(true)}
            >
              {record.Quantity}
            </p>
          </div>
        )
      },
      className: 'text-center text-nowrap',
    },
    {
      name: t('orderslipentry:OrderSlipEntry.Unit'),
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
      name: t('orderslipentry:OrderSlipEntry.UnitPrice'),
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
      name: t('orderslipentry:OrderSlipEntry.Subtotal'),
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
      name: t('orderslipentry:OrderSlipEntry.discount'),
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
      name: t('orderslipentry:OrderSlipEntry.TaxClassification'),
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
      name: t('orderslipentry:OrderSlipEntry.Situation'),
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
    {
      name: t('orderslipentry:OrderSlipEntry.Delete'),
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

  const columns2 = [
    {
      name: t('orderslipentry:OrderSlipEntry.Choice'),
      key: 'choice',
      format: (record: any) => {
        return (
          <div className={'px-2 flex items-center justify-center py-3'}>
            {record.choice}
          </div>
        )
      },
      className: 'text-center',
    },
    {
      name: t('orderslipentry:OrderSlipEntry.Quantity'),
      key: 'status',
      format: (record: any) => (
        <div className={`hover:cursor-pointer flex justify-center text-nowrap`}>
          {record.quantity}
        </div>
      ),
    },
    {
      name: t('orderslipentry:OrderSlipEntry.AssigneeCode'),
      key: 'id',
      format: (record: any) => (
        <div className={`hover:cursor-pointer flex justify-center text-nowrap`}>
          {record.AssigneeCode}
        </div>
      ),
      className: 'text-center text-nowrap',
    },
    {
      name: t('orderslipentry:OrderSlipEntry.AccountName'),
      key: 'id',
      format: (record: any) => (
        <div className={`hover:cursor-pointer flex justify-center text-nowrap`}>
          {record.AccountName}
        </div>
      ),
      className: 'text-center text-nowrap w-[200px]',
    },
  ]

  return (
    <>
      <Header category={t('sidebar:Sidebar.OrderSlipEntry')} />
      {showListOfRecipients ? (
        <Modal>
          <div className='mt-2 flex justify-center'>
            <div className='w-full'>
              <p className='ml-3'>
                {t('orderslipentry:OrderSlipEntry.ListOfRecipients')}
              </p>
              <DataTable
                columns={columns2}
                data={listOfRecipients}
                totalPage={0}
                className='mx-8 mt-3'
                childClassName='!w-full'
              ></DataTable>
              <div className='flex justify-end mr-10 mt-5 mb-3'>
                <Buttom
                  text={t('orderslipentry:OrderSlipEntry.Completion')}
                  className='mr-4 bg-[#00b0f0] text-white'
                />
                <Buttom
                  text={t('orderslipentry:OrderSlipEntry.Cancel')}
                  onClick={() => closeModalShowListOfRecipients()}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
      <div className='bg-gray-100 pb-[50px]'>
        <div className='bg-gray-100 pb-[50px]'>
          <div className='bg-gray-100 flex items-center h-[80px] justify-between'>
            <div className='flex ml-[25px] w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.Status')}
              </p>
              <Input className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px]' />
            </div>
            <div className='flex justify-end w-2/3 mr-[40px]'>
              <Buttom
                text={t('orderslipentry:OrderSlipEntry.SalesProcessing')}
                className='text-nowrap border border-[#00a200] text-[#00a200] mr-[20px] !w-[110px]'
              />
              <Buttom
                text={t('orderslipentry:OrderSlipEntry.DeliveryNotePrinting')}
                className='text-nowrap border border-[#c9211e] text-[#c9211e] mr-[20px] !w-[110px]'
              />
              <Buttom
                text={t('orderslipentry:OrderSlipEntry.ShippingProposal')}
                className='text-nowrap border border-[#00b0f0] text-[#00b0f0] mr-[20px] !w-[110px]'
              />
              <Buttom
                text={t('orderslipentry:OrderSlipEntry.NewDocument')}
                className='text-nowrap border border-orange-500 text-orange-500 mr-[20px] !w-[110px]'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mr-[40px] mt-3'>
            <div className='flex w-1/3 justify-between'>
              <p className=' text-nowrap min-w-[100px]'>
                {t('orderslipentry:OrderSlipEntry.SlipIssueDate')}
              </p>
              <CustomDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.SalesOrderNumber')}
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
            <div className=' w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <Radio
                  name='location'
                  type='radio'
                  className='!w-3'
                  check={true}
                />
                <label className='ml-2 text-nowrap'>
                  {t('orderslipentry:OrderSlipEntry.Domestic')}
                </label>

                <Radio
                  name='location'
                  type='radio'
                  className='!w-3 ml-[20px]'
                />
                <label className='ml-2 text-nowrap'>
                  {t('orderslipentry:OrderSlipEntry.Abroad')}
                </label>
                <div className='flex w-full ml-[30px]'>
                  <div className='flex w-full'>
                    <p className='mr-[10px] text-nowrap '>
                      {t('orderslipentry:OrderSlipEntry.Currency')}
                    </p>
                    <Select options={[]} className='!w-full !bg-white' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 pl-[30px]'>
              <div className='flex'>
                <p className='min-w-[100px] text-nowrap'>
                  {t('orderslipentry:OrderSlipEntry.TransactionClassification')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.QuotationDocumentNumber')}
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
            <div className='flex w-1/3 pl-[30px] ]'></div>
            <div className='flex w-1/3 pl-[30px]'>
              <div className='flex w-full'>
                <p className='min-w-[100px] text-nowrap'>
                  {t('orderslipentry:OrderSlipEntry.CompanyRepresentative')}
                </p>
                <Select options={[]} className='!w-full !bg-white' />
              </div>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] flex text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.CustomerCode')}
                <p className='text-red-600'>※</p>
              </p>
              <div className='flex w-full'>
                <Input className='text-nowrap border border-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start' />
                <div className='border border border-gray-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
                  <IconsSearch />
                </div>
              </div>
            </div>
            <div className='flex w-1/3 pl-[30px] ]'>
              <p className='min-w-[100px] text-nowrap '>
                {t('orderslipentry:OrderSlipEntry.CustomerName')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.ContactPerson')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.DeliveryCode')}
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
                {t('orderslipentry:OrderSlipEntry.DeliveryName')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.DeliveryPersonInCharge')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6'
              />
              <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
              <p className='text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.SameAsBusinessPartner')}
              </p>
            </div>
          </div>

          <div className='flex ml-[25px] mt-3 mr-[40px]'>
            <div className='flex w-1/3'>
              <p className='min-w-[100px] flex no-wrap'>
                {t('orderslipentry:OrderSlipEntry.BillingCode')}
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
                {t('orderslipentry:OrderSlipEntry.BillingName')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !py-0 !rounded-[3px] text-start'
              />
            </div>
            <div className='flex w-1/3 pl-[30px]'>
              <p className='min-w-[100px] text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.BillingContact')}
              </p>
              <Input
                isDisabled={true}
                className='text-nowrap border border-gray-200 bg-gray-200 text-[10px] !w-full h-[24px] !mr-2 !mx-0 !py-0 !rounded-[3px] text-start mx-6'
              />
              <Input type='checkbox' className='!w-[10px] h-[10px] mr-2' />
              <p className='text-nowrap'>
                {t('orderslipentry:OrderSlipEntry.SameAsBusinessPartner')}
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

          <div className='flex ml-[25px] mr-[40px] mt-3'>
            <div className='flex w-1/3 justify-between'>
              <p className=' text-nowrap min-w-[100px]'>
                {t('orderslipentry:OrderSlipEntry.OrderDate')}
              </p>
              <CustomDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>

          <div className='flex ml-[25px] mr-[40px] mt-3'>
            <div className='flex w-1/3 justify-between'>
              <p className=' text-nowrap min-w-[100px]'>
                {t('orderslipentry:OrderSlipEntry.SlipIssueDate')}
              </p>
              <CustomDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </div>
          </div>

          <div className='ml-[25px] mt-3'>
            <p className='text-nowrap font-bold'>
              {t('orderslipentry:OrderSlipEntry.ItemDetails')}
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
              text={t('orderslipentry:OrderSlipEntry.AddItemLine')}
              onClick={() => addNewRow()}
            />
            <div className='mr-10 border border-gray-300 bg-white'>
              <table className='table-auto w-full border-collapse'>
                <tbody>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('orderslipentry:OrderSlipEntry.OrderAmount')}:
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
                      {t('orderslipentry:OrderSlipEntry.TotalExcludingTax')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalUnitPrice.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('orderslipentry:OrderSlipEntry.Discount')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalDiscount.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('orderslipentry:OrderSlipEntry.TotalConsumptionTax')}:
                    </th>
                    <td className='border-l border-gray-300 px-10'>
                      ¥{totalAmountAfterTax.toLocaleString('ja-JP')}
                    </td>
                  </tr>
                  <tr>
                    <th className='min-w-[100px] text-left pr-4 align-top border-r border-gray-300 px-2 py-2'>
                      {t('orderslipentry:OrderSlipEntry.TotalIncludingTax')}:
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
              {t('orderslipentry:OrderSlipEntry.Remarks')}
            </p>
            <textarea className='w-full h-[200px] border border-gray-200 mt-2 px-2 py-2'></textarea>
          </div>

          <div className=' ml-[25px] mr-[40px] mt-6 flex'>
            <Buttom
              text={t('orderslipentry:OrderSlipEntry.Keep')}
              className='text-nowrap border bg-[#4472c4] text-white w-[200px]'
            />
            <Buttom
              text={t('orderslipentry:OrderSlipEntry.Delete')}
              className='text-nowrap border bg-[#757070] text-white ml-2'
            />
          </div>
        </div>
      </div>
    </>
  )
}
