import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";
import CreateForm from "./Components.tsx/CreateForm";
import { User } from "../../../Type/Account/User";
import { Role } from "../../../Type/Account/Role";

const supplierManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<User | null>(null);

  const [sAssetType, setsAssetType] = useState<string | number | undefined>(undefined);
  const [sStatus, setsStatus] = useState<string | number | undefined>(undefined);

  const [listData, setListData] = useState<User[]>(() => {
    const defaultRole: Role = {
      id: 0,
      name: "user",
      delflag: false,
      users: [],
    }
    const defaultItem: User = {
      id: 0,
      name: "John Doe",
      email: "quocdung@abccompany.com",
      password: "12345678",
      address: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, earum.",
      phone: "0123123123",
      gender: true,
      Role: defaultRole,
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "id",
    "name",
    "auctionType",
    "event",
    "status",
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
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default supplierManagement;