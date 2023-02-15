import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  transactionSubtype?: "Momo" | "Bank" | "Cash" | "Crypto";
  transactionType?: "Credit" | "Debit";
};
