import { useEffect, useState } from "react";
import { Asset, ResponseDataAsset } from "../../../../Type/Asset/Asset";
import { AssetServices } from "../../../../Services/Asset/AssetServices";
import { Button, Modal, notification } from "antd";
import { useAuth } from "../../../../Common/Context/AuthContext";
import CreateForm from "../../../AdminPage/RequestPage/Components/CreateForm";
import UpdateForm from "./UpdateFormAsset";

const ManagementAssets = () => {
  const { user } = useAuth();
  const [listData, setListData] = useState<Asset[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | Asset;
  }>({
    isOpen: false,
    data: undefined,
  });

  const getAll = async () => {
    try {
      const res: ResponseDataAsset = await AssetServices.getAll();
      console.log(res);

      const listDataByUserId = res.metadata.data.filter(
        (item) => item.userID === user?.id
      );
      console.log(listDataByUserId);

      setListData(listDataByUserId);
      setTotalItems(listDataByUserId.length);
    } catch (error) {
      notification.error({ message: "Failed to fetch assets" });
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (modalEdit.data) {
      setModalEdit({
        isOpen: false,
        data: undefined,
      });
      return;
    }
    setIsModalOpen(false);
  };
  const showModalEdit = (isOpen: boolean, data: Asset) => {
    setModalEdit({
      isOpen,
      data,
    });
  };
  useEffect(() => {
    if (user) getAll();
  }, [user]);

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">
        Sản phẩm đã gửi ({totalItems})
      </h2>
      <div className="flex justify-end m-5">
        <Button onClick={showModal}>Thêm mới</Button>
      </div>
      <Modal
        width={1000}
        title={"Thêm mới thông tin"}
        open={isModalOpen}
        onCancel={closeModal}
        cancelButtonProps={{ className: "hidden" }}
        okButtonProps={{ className: "hidden" }}
      >
        <CreateForm
          initForm={modalEdit.data}
          getAll={getAll}
          closeModal={closeModal}
        />
      </Modal>
      <Modal
        width={1000}
        title={"Sửa Thông tin"}
        open={modalEdit.isOpen}
        onCancel={closeModal}
        cancelButtonProps={{ className: "hidden" }}
        okButtonProps={{ className: "hidden" }}
      >
        <UpdateForm
          initForm={modalEdit.data}
          getAll={getAll}
          closeModal={closeModal}
        />
      </Modal>
      {listData.length === 0 ? (
        <p className="text-gray-500">Chưa có sản phẩm nào được gửi</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {listData.map((asset) => (
            <div
              key={asset.assetID}
              className="border rounded-lg overflow-hidden bg-white shadow-md flex flex-col"
            >
              <img
                src={asset.mainImage}
                alt={asset.assetName}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "path/to/fallback-image.jpg"; // Thêm ảnh fallback nếu lỗi
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {asset.assetName}
                </h3>
                <p className="text-gray-600">
                  Trạng thái:{" "}
                  <span className="font-bold text-blue-500">
                    {asset.status}
                  </span>
                </p>
                <p className="text-gray-600">
                  Giá: {asset.assetPrice.toLocaleString()} VNĐ
                </p>
                {asset.status !== "available" && (
                  <div className="flex justify-end">
                    <Button
                      className="bg-red text-white"
                      onClick={() => showModalEdit(true, asset)}
                    >
                      Edit
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManagementAssets;
