import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UrlShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="originalUrl" source="originalUrl" />
        <TextField label="shortUrl" source="shortUrl" />
        <TextField label="expiration" source="expiration" />
      </SimpleShowLayout>
    </Show>
  );
};
