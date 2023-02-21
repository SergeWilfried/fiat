import { Bank as TBank } from "../api/bank/Bank";

export const BANK_TITLE_FIELD = "institutionName";

export const BankTitle = (record: TBank): string => {
  return record.institutionName || String(record.id);
};
