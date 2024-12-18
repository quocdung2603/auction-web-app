import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";
import { AuctionItem } from "../../../Type/Auction/AuctionItem";

const auctionManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<AuctionItem | null>(null);

  const [sAuctionType, setsAuctionType] = useState<string | number | undefined>(undefined);
  const [sStatus, setsStatus] = useState<string | number | undefined>(undefined);
  const [sEvent, setsEvent] = useState<string | number | undefined>(undefined);

  const [listData, setListData] = useState<AuctionItem[]>(() => {
    const defaultItem: AuctionItem = {
      auctionItemId: 0,
      auctionSessionId: 0,
      assetId: 0,
      startingBids: 0,
      bidIncrement: 0,
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [  
    "auctionItemId",
    "auctionSessionId",
    "assetId",
    "startingBids",
    "bidIncrement",
    "delflag",
    "Action",
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
      const userData = listData.filter(item => item.auctionItemId === userChoose.auctionItemId);
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
        <Button
          className="bg-red hover:bg-opacity-50 text-white py-2 px-5"
          onClick={() => setDetailForm(true)}
        >
          <p>Add Auction</p></Button>
      </div>
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}
        columnWidths={["15%", "15%", "15%", "15%", "15%", "10%", "10%"]}
      ></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default auctionManagement;