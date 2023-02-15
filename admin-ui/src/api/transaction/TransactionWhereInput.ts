import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  transactionSubtype?: "Fiat" | "Crypto";
  transactionType?: "Credit" | "Debit";
};
