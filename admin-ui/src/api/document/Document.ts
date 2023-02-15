import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Document = {
  createdAt: Date;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt: Date | null;
  id: string;
  status?: "Approved" | "Rejected" | null;
  updatedAt: Date;
  url: JsonValue;
  user?: User | null;
};
