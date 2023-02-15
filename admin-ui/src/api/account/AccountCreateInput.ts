import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  description?: string | null;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
