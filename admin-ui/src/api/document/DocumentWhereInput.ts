import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  expiringAt?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Approved" | "Rejected";
  user?: UserWhereUniqueInput;
};
