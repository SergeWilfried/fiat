import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "MobileMoney" | "Iban" | "Wallet";
  availableBalance?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  currency?: "Xof" | "Eur" | "Usd" | "Celo";
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Approved" | "Pending" | "Blocked";
  transactions?: TransactionListRelationFilter;
};
