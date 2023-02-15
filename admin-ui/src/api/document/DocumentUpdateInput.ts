import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  status?: "Approved" | "Rejected" | null;
  url?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
