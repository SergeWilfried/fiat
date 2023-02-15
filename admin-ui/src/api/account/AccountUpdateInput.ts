import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  description?: string | null;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
