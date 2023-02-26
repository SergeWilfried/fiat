import { AccountCreateNestedManyWithoutCustomersInput } from "./AccountCreateNestedManyWithoutCustomersInput";
import { Account } from "../account/Account";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DocumentCreateNestedManyWithoutCustomersInput } from "./DocumentCreateNestedManyWithoutCustomersInput";
import { UserCreateNestedManyWithoutCustomersInput } from "./UserCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  Account?: AccountCreateNestedManyWithoutCustomersInput;
  address?: AddressWhereUniqueInput | null;
  dob?: Date | null;
  documents?: DocumentCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  enitities?: UserCreateNestedManyWithoutCustomersInput;
  firstname?: string | null;
  lastname?: string | null;
  phone: string;
  status?: "Approved" | "Failed" | "Pending" | null;
};
