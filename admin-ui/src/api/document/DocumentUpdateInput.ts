import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  status?: "Approved" | "Rejected" | null;
  url?: string;
  user?: UserWhereUniqueInput | null;
};
