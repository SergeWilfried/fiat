import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  availableBalance?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
