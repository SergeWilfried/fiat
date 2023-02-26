import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  currency?: StringFilter;
  id?: StringFilter;
  transactionType?: "Credit" | "Debit";
  user?: UserWhereUniqueInput;
};
