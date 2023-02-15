import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  businessName?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  status?: "Approved" | "Pending" | "Rejected";
  username?: StringFilter;
};
