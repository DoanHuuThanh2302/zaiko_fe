import Header from '../../../components/header/header'
import { useTranslation } from 'react-i18next'
import Buttom from '../../../components/buttom/buttom'
import Input from '../../../components/input/input'
import Select from '../../../components/select/select'
import { IconsSearch, IconsDelete } from '../../../assets/icons/icons'
import DataTable from '../../../components/table/table'
import items from '../../../../data/quotation.json'
import { useState } from 'react'

export default function Quotation() {
  const [t] = useTranslation()
  const [data, setData] = useState(items.items)
  console.log(data)
  const totalUnitPrice = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.UnitPrice
  }, 0)
  const totalAmountAfterTax = data.reduce((accumulator, currentItem) => {
    return (
      accumulator +
      (currentItem.UnitPrice * currentItem.TaxClassification) / 100
    )
  }, 0)
  const totalDiscount = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.Discount
  }, 0)

  const addNewRow = () => {
    const newRow = {
      ItemCode: '',
      Model: '',
      ItemName: '',
      Classification: '',
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
      className: '!pl-0 text-center',
    },
    {
      name: t('quotation:Quoation.ItemCode'),
      key: 'ItemCode',
    },
    {
      name: t('quotation:Quoation.Model'),
      key: 'Model',
    },
    {
      name: t('quotation:Quoation.ItemName'),
      key: 'ItemName',
    },
    {
      name: t('quotation:Quoation.Classification'),
      key: 'Classification',
    },
    {
      name: t('quotation:Quoation.Quantity'),
      key: 'Quantity',
    },
    {
      name: t('quotation:Quoation.Unit'),
      key: 'Unit',
    },
    {
      name: t('quotation:Quoation.UnitPrice'),
      key: 'UnitPrice',
    },
    { name: t('quotation:Quoation.discount'), key: 'Discount' },
    {
      name: t('quotation:Quoation.TaxClassification'),
      key: 'TaxClassification',
    },
    {
      name: t('quotation:Quoation.Delete'),
      key: 'id',
      format: () => {
        return (
          <div className={'px-2'}>
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
        <div className='bg-gray-100 flex items-center h-[80px] justify-between border-b'>
          <div className='flex ml-[25px] '>
            <p className='w-[130px]'>ステータス</p>
            <Input />
          </div>
          <div className='flex justify-between w-1/2 mr-[40px]'>
            <Buttom
              text={t('quotation:Quoation.ApprovalRequest')}
              className='text-nowrap border border-orange-500 text-orange-500'
            />
            <Buttom
              text={t('quotation:Quoation.Approval')}
              className='text-nowrap border border-green-500 text-green-500'
            />
            <Buttom
              text={t('quotation:Quoation.NotApproved')}
              className='text-nowrap border border-indigo-500 text-indigo-500'
            />
            <Buttom
              text={t('quotation:Quoation.CostReference')}
              className='text-nowrap border border-pink-500 text-pink-500'
            />
            <Buttom
              text={t('quotation:Quoation.newDocument')}
              className='text-nowrap border border-emerald-500 text-emerald-500'
            />
            <Buttom
              text={t('quotation:Quoation.QuotePrinting')}
              className='text-nowrap border border-cyan-500 text-cyan-500'
            />
          </div>
        </div>

        <div className='flex ml-[25px] mt-5'>
          <p className='w-[130px]'>{t('quotation:Quoation.SlipIssueDate')}</p>
          <Input type='date' />
        </div>

        <div className='flex justify-between ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px]'>{t('quotation:Quoation.SlipNumber')}</p>
            <Buttom
              text={t('quotation:Quoation.QuotePrinting')}
              className='text-nowrap border border-blue-200 bg-gray-200 text-[10px] w-[420px] h-[24px] h-[24px] !py-0 !rounded-[3px]'
            />
            <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
              <IconsSearch />
            </div>
          </div>
          <div className='flex  mr-[40px] ml-[70px]'>
            <Input type='radio' className='!w-3' />
            <label className='ml-2'>{t('quotation:Quoation.Domestic')}</label>

            <Input type='radio' className='!w-3 ml-[20px]' />
            <label className='ml-2'>{t('quotation:Quoation.Abroad')}</label>

            <div className='flex'>
              <div className='flex ml-[50px]'>
                <p className='mr-[30px]'>{t('quotation:Quoation.Currency')}</p>
                <Select options={[]} className='w-[80px]' />
              </div>
              <div className='flex ml-[50px]'>
                <p className='mr-[30px]'>
                  {t('quotation:Quoation.CreditTransaction')}
                </p>
                <Select options={[]} className='w-[130px]' />
              </div>
              <div className='flex ml-[50px]'>
                <p className='mr-[30px]'>
                  {t('quotation:Quoation.CompanyRepresentative')}
                </p>
                <Select options={[]} className='w-[130px]' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap flex'>
              {t('quotation:Quoation.CustomerCode')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='text-[10px] !w-[420px] h-[24px] !py-0 !rounded-[3px]' />
            <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
              <IconsSearch />
            </div>
          </div>

          <div className='flex ml-[100px]'>
            <p className='mr-[30px]'>{t('quotation:Quoation.CustomerName')}</p>
            <Buttom className='text-[10px] border border-blue-200 bg-gray-200 h-[24px] !py-0 !rounded-[3px] !w-[300px]' />
          </div>

          <div className='flex ml-[50px]'>
            <p className='mr-[30px]'>{t('quotation:Quoation.ContactPerson')}</p>
            <Buttom className='text-[10px] h-[24px] border border-blue-200 bg-gray-200 text-[10px] !py-0 !rounded-[3px] !w-[150px]' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap'>
              {t('quotation:Quoation.DeliveryCode')}
            </p>
            <Buttom className='text-[10px] !w-[420px] h-[24px] border border-blue-200 bg-gray-200 !py-0 !rounded-[3px]' />
            <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
              <IconsSearch />
            </div>
          </div>

          <div className='flex ml-[100px]'>
            <p className='mr-[30px]'>{t('quotation:Quoation.DeliveryName')}</p>
            <Buttom className='text-[10px] border border-blue-200 bg-gray-200 h-[24px] !py-0 !rounded-[3px] !w-[300px]' />
          </div>

          <div className='flex ml-[50px]'>
            <p className='mr-[30px]'>
              {t('quotation:Quoation.DeliveryPersonInCharge')}
            </p>
            <Buttom className='text-[10px] h-[24px] border border-blue-200 bg-gray-200 text-[10px] !py-0 !rounded-[3px] !w-[150px]' />
          </div>

          <div className='flex items-center ml-4'>
            <Input type='checkbox' className='!w-[10px] h-[10px]' />
            <p className='mr-[30px] text-nowrap'>
              {t('quotation:Quoation.SameAsBusinessPartner')}
            </p>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap flex'>
              {t('quotation:Quoation.BillingCode')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='text-[10px] !w-[420px] h-[24px] !py-0 !rounded-[3px]' />
            <div className='border border border-blue-200 bg-gray-200-l-0 w-[30px] h-[24px] rounded-r-[3px] !border-l-none cursor-pointer flex items-center justify-center'>
              <IconsSearch />
            </div>
          </div>

          <div className='flex ml-[100px]'>
            <p className='mr-[30px]'>{t('quotation:Quoation.BillingName')}</p>
            <Buttom className='text-[10px] border border-blue-200 bg-gray-200 h-[24px] !py-0 !rounded-[3px] !w-[300px]' />
          </div>

          <div className='flex ml-[50px]'>
            <p className='mr-[30px]'>
              {t('quotation:Quoation.BillingContact')}
            </p>
            <Buttom className='text-[10px] h-[24px] border border-blue-200 bg-gray-200 text-[10px] !py-0 !rounded-[3px] !w-[150px]' />
          </div>

          <div className='flex items-center ml-4'>
            <Input type='checkbox' className='!w-[10px] h-[10px]' />
            <p className='mr-[30px] text-nowrap'>
              {t('quotation:Quoation.SameAsBusinessPartner')}
            </p>
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap flex'>
              {t('quotation:Quoation.Subject')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='text-[10px] w-[920px]  !rounded-[3px]' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap flex'>
              {t('quotation:Quoation.EstimatedDate')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='text-[10px]' type='date' />
          </div>
        </div>

        <div className='flex ml-[25px] mt-3'>
          <div className='flex'>
            <p className='w-[130px] text-nowrap flex'>
              {t('quotation:Quoation.Deadline')}
              <p className='text-red-600'>※</p>
            </p>
            <Input className='text-[10px]' type='date' />
          </div>
        </div>
        <div className='ml-[25px] mt-3'>
          <p>{t('quotation:Quoation.ItemDetails')}</p>
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
            text={t('quotation:Quoation.AddItemLine')}
            onClick={() => addNewRow()}
          />
          <div className='mr-[200px] grid grid-column-1 gap-4'>
            <div className='flex'>
              <p className='w-[130px]'>
                {t('quotation:Quoation.EstimatedAmount')}:
              </p>
              <p>¥{totalUnitPrice + totalDiscount + totalAmountAfterTax}</p>
            </div>

            <div className='flex'>
              <p className='w-[130px]'>
                {t('quotation:Quoation.TotalExcludingTax')}:
              </p>
              <p>¥{totalUnitPrice}</p>
            </div>

            <div className='flex'>
              <p className='w-[130px]'>
                {t('quotation:Quoation.TotalDiscount')}:
              </p>
              <p>¥{totalDiscount}</p>
            </div>

            <div className='flex'>
              <p className='w-[130px]'>
                {t('quotation:Quoation.TotalConsumptionTax')}:
              </p>
              <p>¥{totalAmountAfterTax}</p>
            </div>
          </div>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6'>
          <p className='w-[130px]'>{t('quotation:Quoation.Remarks')}</p>
          <textarea className='w-full h-[200px] border border-blue-200 mt-2 px-2 py-2'></textarea>
        </div>

        <div className=' ml-[25px] mr-[40px] mt-6 flex'>
          <Buttom
            text={t('quotation:Quoation.Keep')}
            className='text-nowrap border bg-[#4472c4] text-white'
          />
          <Buttom
            text={t('quotation:Quoation.Delete')}
            className='text-nowrap border bg-[#757070] text-white ml-2'
          />
        </div>
      </div>
    </>
  )
}
