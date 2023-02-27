import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DocumentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: Date | null;
  image?: string;
  status?: "Approved" | "Rejected" | "Pending" | null;
  tags?: string | null;
  url?: string;
};
