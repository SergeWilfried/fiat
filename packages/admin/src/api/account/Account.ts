import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  accountNumber: string;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  createdAt: Date;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: Customer;
  description: string | null;
  id: string;
  name: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
