import { InputJsonValue } from "../../types";
import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  address?: InputJsonValue;
  businessName?: string | null;
  customer?: CustomerUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  legalTermVersions?: string;
  messages?: InputJsonValue;
  password?: string;
  password2?: string;
  phoe?: string;
  privacyPolicy?: boolean;
  roles?: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions?: boolean;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
