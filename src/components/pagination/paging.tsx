import ReactPaginate from 'react-paginate'
import { useTranslation } from 'react-i18next'
import { IconsPrev, IconsNexts } from '../../assets/icons/icons'

interface PageProps {
  totalPages: number
  //setCurrentPage: (page: number) => void
  current_page?: number
}
const PaginatedItems: React.FC<PageProps> = ({
  totalPages,
  //setCurrentPage,
  current_page,
}) => {
  const [t] = useTranslation()

  // const handlePageClick = ({ selected }: { selected: any }) => {
  //   setCurrentPage(selected + 1)
  // }

  return (
    <>
      <ReactPaginate
        className='flex justify-center px-7 items-end mt-5 '
        nextLabel={
          <>
            <div className='flex items-center'>
              <p className='mr-[14px] text-[8px] md:text-[12px] font-normal leading-4 text-nowrap'>
                {t('common:Common.Next')}
              </p>
              <IconsNexts
                color={current_page == totalPages - 1 ? '#BDC9D3' : '#687C97'}
              />
            </div>
          </>
        }
        //onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={
          <>
            <div className='flex items-center'>
              <IconsPrev color={current_page == 0 ? '#BDC9D3' : '#687C97'} />
              <p className='ml-[14px] text-[8px] md:text-[12px] font-normal leading-4 text-nowrap'>
                {t('common:Common.Prev')}
              </p>
            </div>
          </>
        }
        renderOnZeroPageCount={null}
        nextClassName='flex justify-end w-1/2 pb-5 '
        previousClassName='flex justify-start w-1/2 pb-5'
        pageLinkClassName='mx-1 md:mx-2.5 text-[13px] leading-4 pb-3'
        activeClassName='border-b-4 border-[#0095FF] !text-[#222B45]'
        pageClassName='inline-grid h-[35px] text-[#687C97]'
        breakClassName='pb-3'
        disabledLinkClassName='text-[#C5CEE0] '
        disabledClassName='text-[#C5CEE0] '
        forcePage={totalPages > 0 ? current_page : -1}
      />
    </>
  )
}

export default PaginatedItems
