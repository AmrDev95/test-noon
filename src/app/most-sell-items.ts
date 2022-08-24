export interface MostSellItems {
    title?:string;
    data?:[{
        itemamount:string;
        itemtotal:number;
        menu_categories_items:{
            active:number;
            created:string;
            descriptions:string;
            descriptions_en:string;
            id:number;
            menu_categories_id:number;
            modified:string;
            name:string;
            name_en:string;
            photo:string;
            price:number;
        }
    }]
}