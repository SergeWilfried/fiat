import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: CustomerWhereUniqueInput;
  description?: string | null;
  document?: DocumentWhereUniqueInput;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
};
