import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentWhereInput = {
  accounts?: AccountListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: StringFilter;
  status?: "Approved" | "Rejected";
  tags?: StringNullableFilter;
  url?: StringFilter;
};
