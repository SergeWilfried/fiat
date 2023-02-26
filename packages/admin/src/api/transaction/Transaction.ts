import { User } from "../user/User";

export type Transaction = {
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
