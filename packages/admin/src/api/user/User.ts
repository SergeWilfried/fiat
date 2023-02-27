import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type User = {
  address: JsonValue;
  availableBalance: number | null;
  balance: number;
  businessName: string | null;
  createdAt: Date;
  customer?: Array<Customer>;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  legalTermVersions: string;
  messages: JsonValue;
  password2: string;
  phone: string;
  privacyPolicy: boolean;
  roles: JsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
