import { SortOrder } from "../../util/SortOrder";

export type BankOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  institutionName?: SortOrder;
  instutionType?: SortOrder;
  updatedAt?: SortOrder;
};
