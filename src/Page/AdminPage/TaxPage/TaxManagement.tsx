import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";
import { Tax, TaxType } from "../../../Type/BillAndTax/Tax";

const taxManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<Tax | null>(null);

  const [sAssetType, setsAssetType] = useState<string | number | undefined>(undefined);
  const [sStatus, setsStatus] = useState<string | number | undefined>(undefined);

  const [listData, setListData] = useState<Tax[]>(() => {
    const defaultItem: Tax = {
      id: 0,
      taxName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      taxDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores placeat quod, adipisci nostrum est consequuntur dolorem sit ut nesciunt?", 
      taxAmount: 0,
      delflag: false,
      taxType: TaxType.Percentage,
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "taxName",
    "taxDescription",
    "taxAmount",
    "taxType",
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
      const userData = listData.filter(item => item.id === userChoose.id);
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
        <Button onClick={() => setDetailForm(true)}><p>Add Asset</p></Button>
      </div>
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}
        columnWidths={["15%", "20%", "10%", "10%", "10%", "10%"]}
      ></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default taxManagement;