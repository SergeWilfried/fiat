import { InputJsonValue } from "../../types";
import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address: InputJsonValue;
  businessName?: string | null;
  customer?: CustomerCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  legalTermVersions: string;
  messages?: InputJsonValue;
  password: string;
  password2: string;
  phoe: string;
  privacyPolicy: boolean;
  roles: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
