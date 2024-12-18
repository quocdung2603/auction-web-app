import { useState } from "react";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import Button from "../../../Components/Button/Button";
import Select from "../../../Components/Button/Select";
import { Asset } from "../../../Type/Asset/Asset";

const assetManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<Asset | null>(null);

  const [sAssetType, setsAssetType] = useState<string | number | undefined>(
    undefined
  );
  const [sStatus, setsStatus] = useState<string | number | undefined>(
    undefined
  );

  const [listData, setListData] = useState<Asset[]>(() => {
    const defaultItem: Asset = {
      assetID: 0,
      assetName: "ABCDEF",
      mainImage: "https://picsum.photos/200/300",
      assetDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit earum veniam quas saepe doloremque exercitationem minus, vel ex quod voluptates.",
      assetPrice: 0,
      inspectorID: 0,
      assetTypeID: 0,
      assetStatusID: 0,
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "assetName",
    "mainImage",
    "assetDescription",
    "assetPrice",
    "delflag",
    "Action",
  ];

  const AssetTypeData: any[] = [
    {
      label: "Auction Type",
      value: "0",
    },
    {
      label: "Online",
      value: "1",
    },
    {
      label: "Offline",
      value: "2",
    },
  ];

  const statusData: any[] = [
    {
      label: "Status",
      value: "0",
    },
    {
      label: "Active",
      value: "1",
    },
    {
      label: "Inactive",
      value: "2",
    },
  ];

  const removeUser = () => {
    if (userChoose) {
      const userData = listData.filter(
        (item) => item.assetID === userChoose.assetID
      );
      setListData(userData);
      setRemoveForm(false);
    }
  };

  const hSAssetType = (value: string | number) => {
    console.log("Selected:", value);
    setsAssetType(value);
  };

  const hsStatus = (value: string | number) => {
    console.log("Selected:", value);
    setsStatus(value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-end space-x-5">
        <Select
          placeholder="Status"
          options={statusData}
          onChange={hsStatus}
          value={sStatus}
        ></Select>
        <Select
          placeholder="Asset Type"
          options={AssetTypeData}
          onChange={hSAssetType}
          value={sAssetType}
        ></Select>
        <Button
          className="bg-red hover:bg-opacity-50 text-white py-2 px-5"
          onClick={() => setDetailForm(true)}
        >
          <p>Add Asset</p>
        </Button>
      </div>
      <TableAdmin
        column={column}
        data={listData}
        setOpenFormDetail={setDetailForm}
        setOpenFormRemove={setRemoveForm}
        setItemChoose={setUserChoose}
        columnWidths={["15%","10%","20%","10%","10%","10%"]}
      ></TableAdmin>
      <CreateForm
        openForm={detailForm}
        setOpenForm={setDetailForm}
        content="Detail User"
        userChoose={userChoose}
      />
      <RemoveForm
        openForm={removeForm}
        setOpenForm={setRemoveForm}
        clickRemove={removeUser}
      />
    </div>
  );
};

export default assetManagement;
