import CardReport from "../../../../Components/CardItem/CardReport";

function Category() {
    return ( 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
          <CardReport content="Users" sum={2}/>
          <CardReport content="Companies" sum={100} percent={30}/>
          <CardReport content="Blogs" sum={100}/>
        </div>
     );
}

export default Category;