import { Account } from "../account/Account";

export type Transaction = {
  account?: Account | null;
  amount: number;
  createdAt: Date;
  currency: string;
  fee: number | null;
  id: string;
  metadata: string | null;
  status?: "Successful" | "Pending" | "Failed" | null;
  transactionType?: "Credit" | "Debit";
  updatedAt: Date;
};
