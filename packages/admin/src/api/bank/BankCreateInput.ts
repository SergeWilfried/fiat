export type BankCreateInput = {
  country?: string | null;
  currency: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
};
