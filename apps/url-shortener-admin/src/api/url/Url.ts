export type Url = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  originalUrl: string | null;
  shortUrl: string | null;
  expiration: Date | null;
};
