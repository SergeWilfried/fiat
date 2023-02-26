import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  businessName?: StringNullableFilter;
  customer?: CustomerListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: JsonFilter;
  privacyPolicy?: BooleanFilter;
  status?: "Approved" | "Pending" | "Rejected";
  termsAndConditions?: BooleanFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
