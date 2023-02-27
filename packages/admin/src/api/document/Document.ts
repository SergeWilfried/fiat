import { Customer } from "../customer/Customer";

export type Document = {
  createdAt: Date;
  customer?: Customer | null;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt: Date | null;
  id: string;
  image: string;
  status?: "Approved" | "Rejected" | "Pending" | null;
  tags: string | null;
  updatedAt: Date;
  url: string;
};
