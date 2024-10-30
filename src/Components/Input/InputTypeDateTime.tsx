import {parseDateToISO } from "../../Util/ConverStringToTime";
import ConvertDateTime from "../../Util/ConvertTime";

interface InputTypeDateTimeProps{
    title: string,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

const inputTypeDateTime:React.FC<InputTypeDateTimeProps>=({title,content,setContent,placeholder}) => {
  return (
    <div className='w-full min-w-[200px] mb-5'>
      <label className='block mb-1 text-lg text-black font-medium'>
        {title}
      </label>
      <input
        id='dateInput'
        className='w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md'
        value={parseDateToISO(content)}
        onChange={(e)=>{
          const dateValue = new Date(e.target.value); 
          setContent(ConvertDateTime(dateValue));   
        }}
        placeholder={placeholder}
        type="date"  
      />
    </div>
  );
}

export default inputTypeDateTime;