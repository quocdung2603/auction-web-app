interface InputTypeStringProps{
  title: string,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  placeholder: string
}
const InputTypeString:React.FC<InputTypeStringProps>=({title,content,setContent,placeholder}) =>{
return (
  <div className='w-full min-w-[200px] mb-5'>
    <label className='block mb-1 text-lg text-black font-medium'>
      {title}
    </label>
    <input
      id='contactNumber'
      className='w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md'
      title='Phone number format: +1 123-456-7890'
      value={content}
      onChange={(e)=>{setContent(e.target.value)}}
      placeholder={placeholder}
    />
    {/* <p className='flex items-center mt-2 text-xs text-red-500'>
      Great! Your phone number is valid.
    </p> */}
  </div>
);
}

export default InputTypeString;