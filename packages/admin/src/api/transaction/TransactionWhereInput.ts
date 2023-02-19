import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  transactionSubtype?: "Fiat" | "Crypto";
  transactionType?: "Credit" | "Debit";
};
