import { User } from "../user/User";

export type Document = {
  createdAt: Date;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  id: string;
  status?: "Approved" | "Rejected" | null;
  updatedAt: Date;
  url: string;
  user?: User | null;
};
