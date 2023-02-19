import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  availableBalance?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};