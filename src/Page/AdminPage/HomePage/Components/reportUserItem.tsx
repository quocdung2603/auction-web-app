
interface ReportUserItems{
  role: string,
  amount: number,
  percents: string
}
const ReportUserItems:React.FC =() =>{
return (
  <tr className='text-gray-700 dark:text-gray-100'>
    <th className='border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
      User
    </th>
    <td className='border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
      4
    </td>
    <td className='border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
      <div className='flex items-center'>
        <span className='mr-2'>60%</span>
        <div className='relative w-full'>
          <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
            <div
              style={{ width: '60%' }}
              className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
            ></div>
          </div>
        </div>
      </div>
    </td>
  </tr>
);
}

export default ReportUserItems;
