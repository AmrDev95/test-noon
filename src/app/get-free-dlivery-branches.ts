export interface GetFreeDliveryBranches {
    title?:string;
    data?:[{
        IsOpen:string;
        RestauranthId:number;
        cover:string;
        cuisines:[{
               id:number;
               name:string; 
            }];
            delivery_cost:number;
            delivery_time:number;
            description:any;
            logo:string;
            name:string;
            rate:any;
    }];
}
