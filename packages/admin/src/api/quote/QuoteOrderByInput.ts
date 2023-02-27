import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  account?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  kyc?: SortOrder;
  quoteInfo?: SortOrder;
  updatedAt?: SortOrder;
};
