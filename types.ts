interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export interface IContactInfo {
    id: number,
    name: string,
    email: string
    address: IAddress
}

export interface IPostInfo {
    id: number,
    title: string,
    body: string
}

export interface ISocial {
    id: number,
    icon: string,
    path: string
}