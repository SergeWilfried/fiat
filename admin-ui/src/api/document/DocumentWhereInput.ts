import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  accounts?: AccountListRelationFilter;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: StringFilter;
  status?: "Approved" | "Rejected";
  tags?: StringNullableFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
