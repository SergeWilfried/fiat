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
  messages?: InputJsonValue;
  password: string;
  phoe: string;
  roles: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  username: string;
};
