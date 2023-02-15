import { AccountUpdateManyWithoutTransactionsInput } from "./AccountUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  accounts?: AccountUpdateManyWithoutTransactionsInput;
  amount?: number;
  fee?: number | null;
  status?: "Successful" | "Pending" | "Failed";
  transactionSubtype?: "Fiat" | "Crypto" | null;
  transactionType?: "Credit" | "Debit";
};
