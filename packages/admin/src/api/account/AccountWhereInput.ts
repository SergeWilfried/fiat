import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "MobileMoney" | "Iban" | "Wallet";
  availableBalance?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  currency?: "Xof" | "Eur" | "Usd" | "Celo";
  customers?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Approved" | "Pending" | "Blocked";
};
