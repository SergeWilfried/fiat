import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  customersId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
