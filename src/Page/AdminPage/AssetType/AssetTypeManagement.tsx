import { useState } from "react";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import { AssetType } from "../../../Type/Asset/AssetType";
import Button from "../../../Components/Button/Button";

const assetTypeManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<AssetType | null>(null);

  const [listData, setListData] = useState<AssetType[]>(() => {
    const defaultItem: AssetType = {
      assetTypeID: 1,
      assetTypeName: "John",
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "assetTypeName",
    "delflag",
    "created_at",
    "updated_at",
    "Action",
  ];
  const status = [
    "Status",
    "Bị khóa",
    "Hoạt động"
  ]
  const removeUser = () => {
    if (userChoose) {
      const userData = listData.filter(item => item.assetTypeID === userChoose.assetTypeID);
      setListData(userData);
      setRemoveForm(false);
    }
  }
  return (
    <div className="w-full">
      <div className="flex flex-row justify-end space-x-5">
        <Button
          className="bg-red hover:bg-opacity-50 text-white py-2 px-5"
          onClick={() => setDetailForm(true)}
        >
          <p>Add Asset Type</p>
        </Button>
      </div>
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}
          columnWidths={["20%","20%","20%","20%","10%"]}
      ></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default assetTypeManagement;