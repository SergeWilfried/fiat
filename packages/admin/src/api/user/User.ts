import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";

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
  phone: string;
  privacyPolicy: boolean;
  roles: JsonValue;
  status?: "Approved" | "Pending" | "Rejected" | null;
  termsAndConditions: boolean;
  updatedAt: Date;
  username: string;
};
