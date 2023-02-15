import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  address?: InputJsonValue;
  businessName?: string | null;
  documents?: DocumentUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoe?: string;
  roles?: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  username?: string;
};
