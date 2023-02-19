import { Account } from "../account/Account";
import { User } from "../user/User";

export type Document = {
  accounts?: Array<Account>;
  createdAt: Date;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt: Date | null;
  id: string;
  image: string;
  status?: "Approved" | "Rejected" | null;
  tags: string | null;
  updatedAt: Date;
  url: string;
  user?: User;
};
