import { Customer } from "../customer/Customer";
import { Document } from "../document/Document";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  accountNumber: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance: number | null;
  balance: number | null;
  createdAt: Date;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: Array<Customer>;
  description: string | null;
  document?: Document;
  id: string;
  name: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
