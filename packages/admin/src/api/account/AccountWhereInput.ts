import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "MobileMoney" | "Iban" | "Wallet";
  availableBalance?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  currency?: "Xof" | "Eur" | "Usd" | "Celo";
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Approved" | "Pending" | "Blocked";
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
