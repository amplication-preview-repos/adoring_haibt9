import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UrlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"URLS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="originalUrl" source="originalUrl" />
        <TextField label="shortUrl" source="shortUrl" />
        <TextField label="expiration" source="expiration" />
      </Datagrid>
    </List>
  );
};
