import { CustomerUpdateManyWithoutAccountsInput } from "./CustomerUpdateManyWithoutAccountsInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: CustomerUpdateManyWithoutAccountsInput;
  description?: string | null;
  document?: DocumentWhereUniqueInput;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
