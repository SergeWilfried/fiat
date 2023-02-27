import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers: CustomerWhereUniqueInput;
  description?: string | null;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
};
