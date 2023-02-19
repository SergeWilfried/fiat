import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  documentType?: SortOrder;
  expiringAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  status?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
