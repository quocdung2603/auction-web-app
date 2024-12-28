import React from "react";
import { IconDetail, IconTrash } from "../../Common/Icon/Icon";
import Pagination from "./Pagination";
import { shortenText } from "../../Util/ShortenText";
interface TableAdminProps<T> {
  column: string[];
  data: T[];
  setOpenFormDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenFormRemove: React.Dispatch<React.SetStateAction<boolean>>;
  setItemChoose: React.Dispatch<React.SetStateAction<T | null>>;
  columnWidths?: string[];
}

const convertTitle = (title: string) => {
  // Chuyển title từ dạng "assetID" thành "Asset ID"
  return title
    .split('')
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join('')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}

const tableAdmin = <T,>({ data, column, setOpenFormDetail, setOpenFormRemove, setItemChoose, columnWidths }: TableAdminProps<T>) => {

  return (
    <>
      <table className='rounded-t-lg m-5 w-full mx-auto bg-[#FFF4E5] text-gray-800'>
        <thead>
          <tr className='border-b-2 border-gray-300'>
            {column.map((item, index) => (
              <th
                key={index}
                className={`px-4 py-3 border`}
                style={{ width: columnWidths?.[index] || 'auto' }} // Gán độ rộng từ columnWidths
              >
                {convertTitle(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex % 2 === 0 ? 'bg-gray-100 border-gray-200' : 'bg-[#D6B2B2]'
                } border-b rounded-t-lg m-5 w-full mx-auto`}
            >
              {column.map((field, colIndex) => (
                <td
                  key={colIndex}
                  className={`text-center py-1 px-1`}
                  style={{ width: columnWidths?.[colIndex] || 'auto' }} // Gán độ rộng từ columnWidths
                >
                  {field === 'Action' ? (
                    <>
                      <button
                        className='m-[15px]'
                        onClick={() => {
                          setOpenFormDetail(true);
                          setItemChoose(item);
                        }}
                      >
                        <IconDetail />
                      </button>
                      <button
                        className='m-[15px]'
                        onClick={() => {
                          setOpenFormRemove(true);
                          setItemChoose(item);
                        }}
                      >
                        <IconTrash />
                      </button>
                    </>
                  ) : field.toLowerCase().includes('image') ? (
                    <div className="w-full">
                      <img
                        src={(item as any)[field]}
                        alt='img'
                        className='w-full max-h-[150px] object-cover'
                      />
                    </div>
                  ) : (
                    shortenText((item as any)[field] + '', 10)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default tableAdmin;