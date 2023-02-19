import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  description?: string | null;
  document?: DocumentWhereUniqueInput;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};