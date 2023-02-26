import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number;
  currency?: string;
  fee?: number | null;
  metadata?: string | null;
  status?: "Successful" | "Pending" | "Failed" | null;
  transactionType?: "Credit" | "Debit";
  user?: UserWhereUniqueInput;
};
