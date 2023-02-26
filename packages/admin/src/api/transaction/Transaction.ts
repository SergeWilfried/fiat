import { Account } from "../account/Account";
import { User } from "../user/User";

export type Transaction = {
  account?: Account;
  amount: number;
  createdAt: Date;
  currency: string;
  fee: number | null;
  id: string;
  metadata: string | null;
  status?: "Successful" | "Pending" | "Failed" | null;
  transactionType?: "Credit" | "Debit";
  updatedAt: Date;
  user?: User;
};
