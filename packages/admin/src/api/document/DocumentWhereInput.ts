import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: StringFilter;
  status?: "Approved" | "Rejected" | "Pending";
  tags?: StringNullableFilter;
  url?: StringFilter;
};
