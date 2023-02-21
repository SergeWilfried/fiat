export type BankCreateInput = {
  currency: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
};
