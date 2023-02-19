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
  legalTermVersions: string;
  messages: JsonValue;
  password2: string;
  phoe: string;
  privacyPolicy: boolean;
  roles: JsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  updatedAt: Date;
  username: string;
};
