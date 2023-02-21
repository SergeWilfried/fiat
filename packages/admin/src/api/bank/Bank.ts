export type Bank = {
  createdAt: Date;
  currency: string;
  id: string;
  institutionName: string;
  instutionType?: "MobileMoney" | "Bank" | null;
  updatedAt: Date;
};
