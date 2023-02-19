import { AccountUpdateManyWithoutDocumentsInput } from "./AccountUpdateManyWithoutDocumentsInput";

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  accounts?: AccountUpdateManyWithoutDocumentsInput;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  image?: string;
  status?: "Approved" | "Rejected" | null;
  tags?: string | null;
  url?: string;
  user?: UserWhereUniqueInput;
};
