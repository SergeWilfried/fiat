export type BankUpdateInput = {
  currency?: string;
  institutionName?: string;
  instutionType?: "MobileMoney" | "Bank" | null;
};
