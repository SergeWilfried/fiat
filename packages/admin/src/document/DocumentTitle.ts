import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "image";

export const DocumentTitle = (record: TDocument): string => {
  return record.image || String(record.id);
};
