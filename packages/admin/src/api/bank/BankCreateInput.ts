export type BankCreateInput = {
  country?:
    | "BurkinaFaso"
    | "CoteDivoire"
    | "Mali"
    | "Togo"
    | "Benin"
    | "Senegal"
    | "Niger"
    | "Cameroon"
    | null;
  currency: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
};
