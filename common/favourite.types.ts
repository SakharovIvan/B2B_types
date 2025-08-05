interface Users_Favourite {
    email:string,
    spmatNo:string
}
export interface userFavorities_msg extends Users_Favourite {
msg:Favourite_msg
}

export enum Favourite_msg{
    ADD,
    DELETE
}
