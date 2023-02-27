import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  phone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
