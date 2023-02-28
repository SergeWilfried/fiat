import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
