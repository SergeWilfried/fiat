import { AccountCreateNestedManyWithoutDocumentsInput } from "./AccountCreateNestedManyWithoutDocumentsInput";

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  accounts?: AccountCreateNestedManyWithoutDocumentsInput;
  documentType: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  image: string;
  status?: "Approved" | "Rejected" | null;
  tags?: string | null;
  url: string;
  user: UserWhereUniqueInput;
};
