import { AccountCreateNestedManyWithoutDocumentsInput } from "./AccountCreateNestedManyWithoutDocumentsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DocumentCreateInput = {
  accounts?: AccountCreateNestedManyWithoutDocumentsInput;
  customer?: CustomerWhereUniqueInput | null;
  documentType: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  image: string;
  status?: "Approved" | "Rejected" | "Pending" | null;
  tags?: string | null;
  url: string;
};
