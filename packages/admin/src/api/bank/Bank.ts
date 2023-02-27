export type Bank = {
  country: string | null;
  createdAt: Date;
  currency: string;
  id: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
  updatedAt: Date;
};
