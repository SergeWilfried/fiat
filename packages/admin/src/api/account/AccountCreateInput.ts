import { CustomerCreateNestedManyWithoutAccountsInput } from "./CustomerCreateNestedManyWithoutAccountsInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;
  availableBalance?: number | null;
  balance?: number | null;
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;
  customers?: CustomerCreateNestedManyWithoutAccountsInput;
  description?: string | null;
  document: DocumentWhereUniqueInput;
  name?: string | null;
  status?: "Approved" | "Pending" | "Blocked" | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
