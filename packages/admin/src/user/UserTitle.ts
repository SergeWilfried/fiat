import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "businessName";

export const UserTitle = (record: TUser): string => {
  return record.businessName || String(record.id);
};
