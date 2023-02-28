import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: string;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: CustomerWhereUniqueInput;
  description?: string | null;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
