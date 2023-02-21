import { StringFilter } from "../../util/StringFilter";

export type BankWhereInput = {
  currency?: StringFilter;
  id?: StringFilter;
  institutionName?: StringFilter;
  instutionType?: "MobileMoney" | "Bank";
};
