export interface GetPercentageForVendors {
    title?:string;
    data?:[{
        id:number;
        restaurants:{
            IsOpen:string;
            RestauranthId:number;
            cover:string;
            cuisines:[{
                name:string;
                id:number;
            }];
            delivery_cost:number;
            delivery_time:number;
            logo:string;
            name:string;
            rate:any;
        }
    }]
}