import { SortOrder } from "../../util/SortOrder";

export type UrlOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  originalUrl?: SortOrder;
  shortUrl?: SortOrder;
  expiration?: SortOrder;
};