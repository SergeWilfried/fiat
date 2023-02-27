export type Bank = {
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
  createdAt: Date;
  currency: string;
  id: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
  updatedAt: Date;
};
