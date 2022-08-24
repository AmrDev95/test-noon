import { GetNearestBranche } from "./get-nearest-branche";
import { GetFreeDliveryBranches } from "./get-free-dlivery-branches";
import { GetPercentageForVendors } from "./get-percentage-for-vendors";
import { MostSellItems } from './most-sell-items'
import { GetMostOrderedBranch } from './get-most-ordered-branch'
import { Lastoffers } from "./lastoffers";

export interface Homepage {
    GetFreeDliveryBranches?:GetFreeDliveryBranches;
    GetNearestBranche?:GetNearestBranche;
    GetPercentageForVendors?:GetPercentageForVendors;
    MostSellItems?:MostSellItems;
    getMostOrderedBranch?:GetMostOrderedBranch;
    lastoffers?:Lastoffers;
}

