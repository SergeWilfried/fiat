import { Account } from "../account/Account";
import { Address } from "../address/Address";
import { Document } from "../document/Document";
import { User } from "../user/User";

export type Customer = {
  Account?: Array<Account>;
  address?: Address | null;
  createdAt: Date;
  dob: Date | null;
  documents?: Array<Document>;
  email: string | null;
  enitities?: Array<User>;
  firstname: string | null;
  id: string;
  lastname: string | null;
  phone: string;
  status?: "Approved" | "Failed" | "Pending" | null;
  updatedAt: Date;
};
