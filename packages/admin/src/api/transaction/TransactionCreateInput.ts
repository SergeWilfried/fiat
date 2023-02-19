import { AccountCreateNestedManyWithoutTransactionsInput } from "./AccountCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  accounts?: AccountCreateNestedManyWithoutTransactionsInput;
  amount: number;
  fee?: number | null;
  status: "Successful" | "Pending" | "Failed";
  transactionSubtype?: "Fiat" | "Crypto" | null;
  transactionType: "Credit" | "Debit";
};
