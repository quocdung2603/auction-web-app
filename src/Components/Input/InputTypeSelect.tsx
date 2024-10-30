interface InputTypeSelectProps {
  title: string,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  titleOption: string[]
}

const InputTypeSelect: React.FC<InputTypeSelectProps> = ({ title, content, setContent,titleOption }) => {
return (
  <div className='w-full min-w-[200px] mb-5'>
    <label className='block mb-1 text-lg text-black font-medium'>
      {title}
    </label>
    <select
      className='w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md'
      value={content.toString()} // Convert boolean to string for the select element
      onChange={(e) => setContent(e.target.value)} // Convert back to boolean
    >
      {
          titleOption.map((item,index)=>{
              return <option value={item} key={index}>{item}</option>
          })
      }
    </select>
  </div>
);
};

export default InputTypeSelect;