import { SortOrder } from "../../util/SortOrder";

export type BankOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  institutionName?: SortOrder;
  instutionType?: SortOrder;
  updatedAt?: SortOrder;
};
