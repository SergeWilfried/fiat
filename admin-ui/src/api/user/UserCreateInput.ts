import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  address: InputJsonValue;
  businessName?: string | null;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
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
  username: string;
};
