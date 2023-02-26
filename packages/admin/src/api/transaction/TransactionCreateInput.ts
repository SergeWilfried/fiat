import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  account: AccountWhereUniqueInput;
  amount: number;
  currency: string;
  fee?: number | null;
  metadata?: string | null;
  status?: "Successful" | "Pending" | "Failed" | null;
  transactionType: "Credit" | "Debit";
  user: UserWhereUniqueInput;
};
