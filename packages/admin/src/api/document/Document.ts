import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";

export type Document = {
  accounts?: Array<Account>;
  createdAt: Date;
  customer?: Customer | null;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt: Date | null;
  id: string;
  image: string;
  status?: "Approved" | "Rejected" | null;
  tags: string | null;
  updatedAt: Date;
  url: string;
};
