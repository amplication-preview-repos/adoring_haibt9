import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UrlWhereInput = {
  id?: StringFilter;
  originalUrl?: StringNullableFilter;
  shortUrl?: StringNullableFilter;
  expiration?: DateTimeNullableFilter;
};
