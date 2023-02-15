import { Account } from "../account/Account";

export type Transaction = {
  accounts?: Array<Account>;
  amount: number;
  createdAt: Date;
  fee: number | null;
  id: string;
  status?: "Successful" | "Pending" | "Failed";
  transactionSubtype?: "Momo" | "Bank" | "Cash" | "Crypto" | null;
  transactionType?: "Credit" | "Debit";
  updatedAt: Date;
};
