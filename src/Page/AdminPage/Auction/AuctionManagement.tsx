import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";

const auctionManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<any | null>(null);

  const [sAuctionType, setsAuctionType] = useState<string | number | undefined>(undefined);
  const [sStatus, setsStatus] = useState<string | number | undefined>(undefined);
  const [sEvent, setsEvent] = useState<string | number | undefined>(undefined);

  const [listData, setListData] = useState<any[]>(() => {
    const defaultItem: any = {
      id: "#1234",
      name: "John",
      auctionType: 'online/offline',
      event: 'event',
      status: 'Active',
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

  const AuctionTypeData: any[] = [
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

  const eventData: any[] = [
    {
      label: 'Event',
      value: '0',
    },
    {
      label: 'Event 1',
      value: '1',
    },
    {
      label: 'Event 2',
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

  const hSAuctionType = (value: string | number) => {
    console.log('Selected:', value);
    setsAuctionType(value);
  };

  const hsStatus = (value: string | number) => {
    console.log('Selected:', value);
    setsStatus(value);
  }

  const hsEvent = (value: string | number) => {
    console.log('Selected:', value);
    setsEvent(value);
  }

  return (
    <div className="w-full">
      <div className="flex flex-row justify-end space-x-5">
        <Select placeholder="Event" options={eventData} onChange={hsEvent} value={sEvent}></Select>
        <Select placeholder="Status" options={statusData} onChange={hSAuctionType} value={sAuctionType}></Select>
        <Select placeholder="Auction Type" options={AuctionTypeData} onChange={hsStatus} value={sStatus}></Select>
        <Button onClick={() => setDetailForm(true)}><p>Add auction</p></Button>
      </div>
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default auctionManagement;