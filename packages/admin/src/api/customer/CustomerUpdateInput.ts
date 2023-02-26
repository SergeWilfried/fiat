import { AccountUpdateManyWithoutCustomersInput } from "./AccountUpdateManyWithoutCustomersInput";
import { Account } from "../account/Account";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DocumentUpdateManyWithoutCustomersInput } from "./DocumentUpdateManyWithoutCustomersInput";
import { UserUpdateManyWithoutCustomersInput } from "./UserUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  Account?: AccountUpdateManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
  dob?: Date | null;
  documents?: DocumentUpdateManyWithoutCustomersInput;
  email?: string | null;
  enitities?: UserUpdateManyWithoutCustomersInput;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string;
  status?: "Approved" | "Failed" | "Pending" | null;
};
