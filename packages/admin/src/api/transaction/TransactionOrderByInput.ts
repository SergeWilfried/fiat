import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
