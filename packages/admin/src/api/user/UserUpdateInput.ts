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
  legalTermVersions?: string;
  messages?: InputJsonValue;
  password?: string;
  password2?: string;
  phoe?: string;
  privacyPolicy?: boolean;
  roles?: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions?: boolean;
  username?: string;
};
