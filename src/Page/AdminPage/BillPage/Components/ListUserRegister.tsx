import React, { useState, useEffect } from "react";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { notification } from "antd";
import { AuctionBid, ResponseDataAuctionBid } from "../../../../Type/Auction/AuctionSession";
import { ResponseDataUserByToken } from "../../../../Type/Account/User";
import { UserServices } from "../../../../Services/Account/UserServices";

interface ListUserRegisterProps {
    auctionId?: number;
}

interface ListData {
    data: AuctionBid;
    userName: string;
}

const ListUserRegister: React.FC<ListUserRegisterProps> = ({ auctionId }) => {
    const [listUser, setListUser] = useState<ListData[]>([]);

    const getAllAuctionByAuction = async () => {
        try {
            if(auctionId)
            {
                const res: ResponseDataAuctionBid = await AuctionSessionServices.getAutionByAuctionId(auctionId);
                const listData: ListData[] = await Promise.all(
                    res.data.map(async (item) => {
                        const userData: ResponseDataUserByToken = await UserServices.getById(item.userId.toString());
                        return {
                            data: item,
                            userName: userData.data.name || "Unknown User",
                        };
                    })
                );
                setListUser(listData);
            }
        } catch (error) {
            notification.error({ message: "Lỗi lấy dữ liệu" });
        }
    };

    // Gọi API khi component mount hoặc auctionId thay đổi
    useEffect(() => {
        getAllAuctionByAuction();
    }, [auctionId]);

    return (
        <div className="user-register-table">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>User Name</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Auction ID</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((item) => (
                        <tr key={item.data.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.data.id}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.userName}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.data.auctionId}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                {item.data.price.toLocaleString()} VND
                            </td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                {item.data.status ? "Active" : "Inactive"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListUserRegister;