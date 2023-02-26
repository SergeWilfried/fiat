import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { Account } from "../account/Account";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  Account?: AccountListRelationFilter;
  address?: AddressWhereUniqueInput;
  dob?: DateTimeNullableFilter;
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  enitities?: UserListRelationFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  phone?: StringFilter;
  status?: "Approved" | "Failed" | "Pending";
};
