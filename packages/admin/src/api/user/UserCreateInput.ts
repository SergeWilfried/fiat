import { InputJsonValue } from "../../types";
import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address: InputJsonValue;
  availableBalance?: number | null;
  balance: number;
  businessName?: string | null;
  customer?: CustomerCreateNestedManyWithoutUsersInput;
  email: string;
  firstName: string;
  lastName: string;
  legalTermVersions: string;
  messages?: InputJsonValue;
  password: string;
  phone: string;
  privacyPolicy: boolean;
  roles: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  username: string;
};
