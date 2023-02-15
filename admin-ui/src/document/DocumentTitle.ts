import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "url";

export const DocumentTitle = (record: TDocument): string => {
  return record.url || String(record.id);
};
