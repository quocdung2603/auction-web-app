import Category from "./Components/category";
import FinalChart from "./Components/finalChart";
import ReportWeb from "./Components/reportWeb";

function homePageAdmin() {
  return (
    <main className='w-full bg-gray-200 transition-all main'>
      <div className='p-6'>
        <Category/>
        <FinalChart/>
        <ReportWeb/>
      </div>
    </main>
  );
}

export default homePageAdmin;