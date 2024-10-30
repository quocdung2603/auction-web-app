import React from 'react';

interface AddStatusAdminProps {
  contentAdd: string;
  contentStatus: string[];
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const addStatusAdmin: React.FC<AddStatusAdminProps> = ({
  contentAdd,
  contentStatus,
  setOpenForm
}) => {
  const toggleCreateForm = () => {
    setOpenForm(true);
  };

  return (
    <div className='flex flex-col sm:flex-row justify-end mx-auto sm:space-x-2'>
      <select
        className='w-32 sm:w-48 md:w-36 lg:w-32 m-2 rounded-lg text-white bg-orange-700 py-2 px-3 font-bold shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:opacity-50'
        data-ripple-light='false'
      >
        {contentStatus.map((item, index) => (
          <option className='bg-white text-black' key={index+0}>
            {item}
          </option>
        ))}
      </select>
      <button
        onClick={toggleCreateForm}
        className='w-32 sm:w-48 md:w-36 lg:w-32 m-2 rounded-lg text-white bg-orange-700 py-2 px-3 
        font-bold text-sm shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:opacity-50'
        data-ripple-light='false'
      >
        {contentAdd}
      </button>
    </div>
  );
};

export default addStatusAdmin;