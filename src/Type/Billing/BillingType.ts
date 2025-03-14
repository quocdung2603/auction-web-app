export interface RegisterAution{
    userId: number,
    auctionId:number,
    price: number
}

export interface ResponseRegisterAution{
    code: number;
    message: string;
    data: string
}

export interface ResponseCheckRegisterAution{
    code: number;
    message: string;
    data: boolean
}