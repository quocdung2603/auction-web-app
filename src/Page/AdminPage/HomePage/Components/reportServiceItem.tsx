import { Link } from "react-router-dom";

interface ReportServiceItemProps{
  nameService: string,
  Earning: number,
  status: string,
}
const reportServiceItem:React.FC<ReportServiceItemProps>=({nameService,Earning,status})=> {
return (
  <tr>
    <td className='py-2 px-4 border-b border-b-gray-50'>
      <div className='flex items-center'>
        <img
          src='https://placehold.co/32x32'
          alt=''
          className='w-8 h-8 rounded object-cover block'
        />
        <Link
          to='/'
          className='text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate'
        >
          {nameService}
        </Link>
      </div>
    </td>
    <td className='py-2 px-4 border-b border-b-gray-50'>
      <span className={`text-[13px] font-medium ${status==='Pending' ? 'text-emerald-500':'text-rose-500'} `}>
          {status==='Pending' ? '+$': '-$'}{Earning}
      </span>
    </td>
    <td className='py-2 px-4 border-b border-b-gray-50'>
      <span className={`inline-block p-1 rounded ${status==='Pending' ? 'bg-emerald-500/10 text-emerald-500':'bg-rose-500/10 text-rose-500'} font-medium text-[12px] leading-none`}>
        {status}
      </span>
    </td>
  </tr>
);
}

export default reportServiceItem;