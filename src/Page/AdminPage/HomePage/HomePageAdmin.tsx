import Category from "./Components/Category";
import FinalChart from "./Components/FinalChart";
import ReportWeb from "./Components/ReportWeb";

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