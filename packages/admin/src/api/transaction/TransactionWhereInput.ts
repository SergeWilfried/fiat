import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  currency?: StringFilter;
  id?: StringFilter;
  transactionType?: "Credit" | "Debit";
};
