import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  documentType?: "Driverlicence" | "Passport" | "GovernmentId";
  id?: StringFilter;
  status?: "Approved" | "Rejected";
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
