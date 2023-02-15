import { AccountUpdateManyWithoutTransactionsInput } from "./AccountUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  accounts?: AccountUpdateManyWithoutTransactionsInput;
  amount?: number;
  fee?: number | null;
  status?: "Successful" | "Pending" | "Failed";
  transactionSubtype?: "Momo" | "Bank" | "Cash" | "Crypto" | null;
  transactionType?: "Credit" | "Debit";
};
