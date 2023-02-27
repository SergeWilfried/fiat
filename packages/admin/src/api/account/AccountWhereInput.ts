import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accountType?: "MobileMoney" | "Iban" | "Wallet";
  currency?: "Xof" | "Eur" | "Usd" | "Celo";
  customers?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Approved" | "Pending" | "Blocked";
};
