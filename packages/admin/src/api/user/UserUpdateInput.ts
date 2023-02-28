import { InputJsonValue } from "../../types";
import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  address?: InputJsonValue;
  availableBalance?: number | null;
  balance?: number;
  businessName?: string | null;
  customer?: CustomerUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string;
  lastName?: string;
  legalTermVersions?: string;
  messages?: InputJsonValue;
  password?: string;
  phone?: string;
  privacyPolicy?: boolean;
  roles?: InputJsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions?: boolean;
  username?: string;
};
