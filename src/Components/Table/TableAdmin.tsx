import React from "react";
import { IconDetail, IconTrash } from "../../Common/Icon/Icon";
import Pagination from "./Pagination";

interface TableAdminProps<T> {
  column: string[];
  data: T[];
  setOpenFormDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenFormRemove: React.Dispatch<React.SetStateAction<boolean>>;
  setItemChoose: React.Dispatch<React.SetStateAction<T | null>>;
}

const tableAdmin = <T,>({ data, column, setOpenFormDetail, setOpenFormRemove, setItemChoose }: TableAdminProps<T>) => {
  
  return (
    <>
      <table className='rounded-t-lg m-5 w-full  mx-auto bg-[#FFF4E5] text-gray-800'>
        <thead>
          <tr className=' border-b-2 border-gray-300'>
            {column.map((item, index) => {
              return (
                <th key={index+0} className='px-4 py-3'>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index+0}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100 border-gray-200' : 'bg-[#D6B2B2]'
                } border-b rounded-t-lg m-5 w-full  mx-auto`}
              >
                {column.map((field) => {
                  return field === 'Action' ? ( 
                    <td className='px-4 py-3 text-center'>
                      <button className='m-[15px]' onClick={() => { setOpenFormDetail(true); setItemChoose(item); }}>
                        <IconDetail />
                      </button>
                      <button className='m-[15px]' onClick={() => { setOpenFormRemove(true); setItemChoose(item); }}>
                        <IconTrash />
                      </button>
                    </td>
                  ) : (
                    <td className='px-4 py-3 text-center'>{(item as any)[field]+""}</td> // Using 'any' to access dynamic fields
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default tableAdmin;