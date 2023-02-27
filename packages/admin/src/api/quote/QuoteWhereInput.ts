import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  account?: JsonFilter;
  id?: StringFilter;
  kyc?: JsonFilter;
};
