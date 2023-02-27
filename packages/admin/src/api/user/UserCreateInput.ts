import { InputJsonValue } from "../../types";
import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address: InputJsonValue;
  businessName?: string | null;
  customer?: CustomerCreateNestedManyWithoutUsersInput;
  email: string;
  firstName: string;
  lastName: string;
  legalTermVersions: string;
  messages?: InputJsonValue;
  password: string;
  password2: string;
  phone: string;
  privacyPolicy: boolean;
  roles: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
