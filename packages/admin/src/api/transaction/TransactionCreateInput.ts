import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount: number;
  currency: string;
  fee?: number | null;
  metadata?: string | null;
  status?: "Successful" | "Pending" | "Failed" | null;
  transactionType: "Credit" | "Debit";
};
