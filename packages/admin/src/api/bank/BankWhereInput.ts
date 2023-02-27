import { StringFilter } from "../../util/StringFilter";

export type BankWhereInput = {
  country?:
    | "BurkinaFaso"
    | "CoteDivoire"
    | "Mali"
    | "Togo"
    | "Benin"
    | "Senegal"
    | "Niger"
    | "Cameroon";
  currency?: StringFilter;
  id?: StringFilter;
  institutionName?: StringFilter;
  instutionType?: "MobileMoney" | "Bank";
};
