import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  businessName?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: JsonFilter;
  privacyPolicy?: BooleanFilter;
  status?: "Approved" | "Pending" | "Rejected";
  termsAndConditions?: BooleanFilter;
  username?: StringFilter;
};
