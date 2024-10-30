import React from 'react';
import { IconUploadFile } from '../../Common/Icon/Icon';
interface InputTypeFileProps{
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>
}
const InputTypeFile:React.FC<InputTypeFileProps>=({image,setImage})=> {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file.name);
    }
  };
  return (
    <label
      htmlFor='dropzone-file'
      className='mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center'
    >
      <IconUploadFile />
      {image ? (
        <p className='mt-4 text-green-600 tracking-wide'>
          File "{image}" uploaded successfully!
        </p>
      ) : (
        <>
          <h2 className='mt-4 text-xl font-medium text-gray-700 tracking-wide'>
            Payment File
          </h2>

          <p className='mt-2 text-gray-500 tracking-wide'>
            Upload or drag & drop your file SVG, PNG, JPG, or GIF.
          </p>
        </>
      )}

      <input
        id='dropzone-file'
        type='file'
        className='hidden'
        onChange={handleFileChange}
      />
    </label>
  );
}

export default InputTypeFile;