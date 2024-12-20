import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { AssetType } from "../../../../Type/Asset/AssetType";

interface CreateFormProps {
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  userChoose?: AssetType | null
}

const createForm: React.FC<CreateFormProps> = ({ openForm, setOpenForm, content = "ADD NEWS ACCOUNT", userChoose }) => {
  const [assetTypeName, setAssetTypeName] = useState<string>(userChoose?.assetTypeName ?? "");
  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (userChoose) {
      setAssetTypeName(userChoose?.assetTypeName ?? "")
    }
  }, [userChoose]);
  return (
    <>
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-8 w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[700px] mx-auto relative">
            <button
              className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            <div className="flex flex-col gap-6">
              <h1 className="text-center text-black text-xl sm:text-2xl font-bold mb-4">
                {content}
              </h1>
              <form method="POST" className="space-y-4">
                <InputTypeString
                  title="Tên loại tài sản"
                  content={assetTypeName}
                  setContent={setAssetTypeName}
                  placeholder="Nhập tên loại tài sản"
                />

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="min-w-[90px] py-2 bg-[#ECEBE9] rounded-3xl font-bold text-[#4F4B45] text-sm focus:outline-none hover:bg-[#bdbcba]"
                    onClick={closeFormModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="min-w-[90px] py-2 bg-[#FB9400] rounded-3xl font-bold text-white text-sm focus:outline-none hover:bg-[#E07B00]"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default createForm;