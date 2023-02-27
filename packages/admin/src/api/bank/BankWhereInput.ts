import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankWhereInput = {
  country?: StringNullableFilter;
  currency?: StringFilter;
  id?: StringFilter;
  institutionName?: StringFilter;
  instutionType?: "MobileMoney" | "Bank";
};
