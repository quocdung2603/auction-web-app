import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";
import { Asset } from "../../../../Type/Asset/Asset";

interface CreateFormProps {
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  userChoose?: Asset | null
}

const assetType = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const assetStatus = [
  { value: 1, label: "Asset Status 1" },
  { value: 2, label: "Asset Status 2" },
  { value: 3, label: "Asset Status 3" },
  { value: 4, label: "Asset Status 4" },
  { value: 5, label: "Asset Status 5" },
];

const inspector = [
  { value: 1, label: "Inspector 1" },
  { value: 2, label: "Inspector 2" },
  { value: 3, label: "Inspector 3" },
  { value: 4, label: "Inspector 4" },
  { value: 5, label: "Inspector 5" },
];

const createForm: React.FC<CreateFormProps> = ({ openForm, setOpenForm, content = "ADD NEWS ACCOUNT", userChoose }) => {
  const [assetName, setAssetName] = useState<string>(userChoose?.assetName ?? "");
  const [mainImage, setMainImage] = useState<string>(userChoose?.mainImage ?? "");
  const [assetDescription, setAssetDescription] = useState<string>(userChoose?.assetDescription ?? "");
  const [assetPrice, setAssetPrice] = useState<number>(userChoose?.assetPrice ?? 0);
  const [inspectorID, setInspectorID] = useState<number>(userChoose?.inspectorID ?? 0);
  const [assetTypeID, setAssetTypeID] = useState<number>(userChoose?.assetTypeID ?? 0);
  const [assetStatusID, setAssetStatusID] = useState<number>(userChoose?.assetStatusID ?? 0);
  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (userChoose) {
      setAssetName(userChoose?.assetName ?? "");
      setMainImage(userChoose?.mainImage ?? "");
      setAssetDescription(userChoose?.assetDescription ?? "");
      setAssetPrice(userChoose?.assetPrice ?? 0);
      setInspectorID(userChoose?.inspectorID ?? 0);
      setAssetTypeID(userChoose?.assetTypeID ?? 0);
      setAssetStatusID(userChoose?.assetStatusID ?? 0);
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputTypeFile
                    image={mainImage}
                    setImage={setMainImage}
                  />
                  <div className="flex flex-col space-y-4">
                    <InputTypeString
                      title="Tên tài sản"
                      content={assetName}
                      setContent={setAssetName}
                      placeholder="Nhập tên sản phẩm"
                    />
                    <InputTypeNumber
                      title="Giá sản phẩm"
                      content={assetPrice}
                      setContent={setAssetPrice}
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <InputTypeSelect
                    title="Mã người kiểm định"
                    content={inspectorID}
                    setContent={setInspectorID}
                    titleOption={inspector}
                  />
                  <InputTypeSelect
                    title="Mã loại sản phẩm"
                    content={inspectorID}
                    setContent={setInspectorID}
                    titleOption={assetType}
                  />
                  <InputTypeSelect
                    title="Mã trạng thái sản phẩm"
                    content={assetStatusID}
                    setContent={setAssetStatusID}
                    titleOption={assetStatus}
                  />
                </div>
                <InputDescription
                  title="Mô tả về sản phẩm"
                  content={assetDescription}
                  setContent={setAssetDescription}
                  placeholder="Nhập mô tả về sản phẩm"
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