import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type User = {
  address: JsonValue;
  businessName: string | null;
  createdAt: Date;
  customer?: Array<Customer>;
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
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
