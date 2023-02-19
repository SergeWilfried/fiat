import { AccountCreateNestedManyWithoutDocumentsInput } from "./AccountCreateNestedManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  accounts?: AccountCreateNestedManyWithoutDocumentsInput;
  documentType: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  status?: "Approved" | "Rejected" | null;
  url: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
