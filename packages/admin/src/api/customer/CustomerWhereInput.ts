import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { Account } from "../account/Account";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  Account?: AccountListRelationFilter;
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
