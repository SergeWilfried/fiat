import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  businessName?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  legalTermVersions?: SortOrder;
  messages?: SortOrder;
  password?: SortOrder;
  password2?: SortOrder;
  phone?: SortOrder;
  privacyPolicy?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  termsAndConditions?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
