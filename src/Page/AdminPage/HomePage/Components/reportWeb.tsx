import ReportServiceItem from './reportServiceItem';
const listReportServices = [
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Pending',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Withdrawn',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Pending',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Withdrawn',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Pending',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Withdrawn',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Pending',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Withdrawn',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Pending',
  },
  {
    nameService: 'Create landing page',
    Earning: 235,
    status: 'Withdrawn',
  },
];
function ReportWeb() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
      <div className='bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2'>
        <div className='flex justify-between mb-4 items-start'>
          <div className='font-medium'>Order Statistics</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
          <div className='rounded-md border border-dashed border-gray-200 p-4'>
            <div className='flex items-center mb-0.5'>
              <div className='text-xl font-semibold'>10</div>
              <span className='p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1'>
                $80
              </span>
            </div>
            <span className='text-gray-400 text-sm'>Active</span>
          </div>
          <div className='rounded-md border border-dashed border-gray-200 p-4'>
            <div className='flex items-center mb-0.5'>
              <div className='text-xl font-semibold'>50</div>
              <span className='p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1'>
                +$469
              </span>
            </div>
            <span className='text-gray-400 text-sm'>Completed</span>
          </div>
          <div className='rounded-md border border-dashed border-gray-200 p-4'>
            <div className='flex items-center mb-0.5'>
              <div className='text-xl font-semibold'>4</div>
              <span className='p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1'>
                -$130
              </span>
            </div>
            <span className='text-gray-400 text-sm'>Canceled</span>
          </div>
        </div>
        <div>
          <canvas id='order-chart'></canvas>
        </div>
      </div>
      <div className='bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md'>
        <div className='flex justify-between mb-4 items-start'>
          <div className='font-medium'>Earnings</div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-[460px]'>
            <thead>
              <tr>
                <th className='text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md'>
                  Service
                </th>
                <th className='text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left'>
                  Earning
                </th>
                <th className='text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {listReportServices.map((item, index) => {
                return (
                  <ReportServiceItem
                    nameService={item.nameService}
                    Earning={item.Earning}
                    status={item.status}
                    key={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportWeb;