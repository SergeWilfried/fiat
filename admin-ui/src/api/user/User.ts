import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type User = {
  accounts?: Array<Account>;
  address: JsonValue;
  businessName: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages: JsonValue;
  phoe: string;
  roles: JsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  updatedAt: Date;
  username: string;
};
