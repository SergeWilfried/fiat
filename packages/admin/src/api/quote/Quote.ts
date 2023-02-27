import { JsonValue } from "type-fest";

export type Quote = {
  account: JsonValue;
  createdAt: Date;
  id: string;
  kyc: JsonValue;
  quoteInfo: JsonValue;
  updatedAt: Date;
};
