import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";
import { Inventory } from "../../../Type/Asset/Inventory";

const warehouseManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<Inventory | null>(null);

  const [sAssetType, setsAssetType] = useState<string | number | undefined>(undefined);
  const [sStatus, setsStatus] = useState<string | number | undefined>(undefined);

  const [listData, setListData] = useState<Inventory[]>(() => {
    const defaultItem: Inventory = {
      inventoryID: 0,
      quantity: 0,
      entryTime: new Date(),
      exitTime: new Date(),
      warehouseID: 0,
      assetID: 1,
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "assetID",
    "quantity",
    "entryTime",
    "exitTime",
    "delflag",
    "Action", 
  ];

  const AssetTypeData: any[] = [
    {
      label: 'Auction Type',
      value: '0',
    },
    {
      label: 'Online',
      value: '1',
    },
    {
      label: 'Offline',
      value: '2',
    }
  ]

  const statusData: any[] = [
    {
      label: 'Status',
      value: '0',
    },
    {
      label: 'Active',
      value: '1',
    },
    {
      label: 'Inactive',
      value: '2',
    }
  ]

  const removeUser = () => {
    if (userChoose) {
      const userData = listData.filter(item => item.inventoryID === userChoose.inventoryID);
      setListData(userData);
      setRemoveForm(false);
    }
  }

  const hSAssetType = (value: string | number) => {
    console.log('Selected:', value);
    setsAssetType(value);
  };

  const hsStatus = (value: string | number) => {
    console.log('Selected:', value);
    setsStatus(value);
  }


  return (
    <div className="w-full">
      <div className="flex flex-row justify-end space-x-5">
        <Select placeholder="Status" options={statusData} onChange={hsStatus} value={sStatus}></Select>
        <Select placeholder="Asset Type" options={AssetTypeData} onChange={hSAssetType} value={sAssetType}></Select>
        <Button className="bg-red hover:bg-opacity-50 text-white py-2 px-5" onClick={() => setDetailForm(true)}><p>Add Asset</p></Button>
      </div>
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose} 
        columnWidths={["20%", "20%", "20%", "20%", "10%", "10%"]}
      ></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default warehouseManagement;