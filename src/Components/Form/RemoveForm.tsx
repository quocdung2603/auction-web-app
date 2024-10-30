import { IconWindowClose } from '../../Common/Icon/Icon';

interface RemoveFormProps {
  openForm?: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  clickRemove: () => void;
}
const removeForm: React.FC<RemoveFormProps> = ({
  openForm,
  setOpenForm,
  clickRemove,
}) => {
  const closeFormModal = () => {
    setOpenForm(false);
  };

  return (
    <>
      {openForm === true && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative'>
            <button
              className='absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none'
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            {/* Auth Card Container */}
            <div className='grid place-items-center mx-2 my-20 sm:my-auto'>
              {/* Auth Card */}
              <div>
                <div className='flex justify-center text-black text-[30px] font-bold'>
                  Bạn có chắc muốn xóa không ?
                </div>
                <form className='mt-10' method='POST'>
                  {/* Auth Button */}
                  <div className='flex justify-between'>
                    <button
                      onClick={clickRemove}
                      type='button'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 bg-[#FB9400] rounded-3xl
                          font-bold text-white text-sm
                          focus:outline-none
                          hover:bg-[#E07B00] hover:shadow-none shadow-lg
                          '
                    >
                      Có
                    </button>
                    <button
                      onClick={closeFormModal}
                      type='button'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 mx-1 bg-[#ECEBE9] rounded-3xl
                          font-bold text-[#4F4B45] text-sm
                          focus:outline-none hover:bg-[#bdbcba] hover:shadow-none 
                      '
                    >
                      Không
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default removeForm;