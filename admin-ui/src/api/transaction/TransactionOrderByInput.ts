import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionSubtype?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
