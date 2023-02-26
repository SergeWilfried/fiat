import { AccountUpdateManyWithoutDocumentsInput } from "./AccountUpdateManyWithoutDocumentsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DocumentUpdateInput = {
  accounts?: AccountUpdateManyWithoutDocumentsInput;
  customer?: CustomerWhereUniqueInput | null;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  image?: string;
  status?: "Approved" | "Rejected" | null;
  tags?: string | null;
  url?: string;
};
