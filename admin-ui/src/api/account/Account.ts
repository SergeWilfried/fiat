import { Document } from "../document/Document";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Account = {
  accountNumber: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance: number | null;
  balance: number | null;
  createdAt: Date;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  description: string | null;
  document?: Document;
  id: string;
  name: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
