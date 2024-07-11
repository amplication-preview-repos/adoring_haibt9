import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UrlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="originalUrl" source="originalUrl" />
        <TextInput label="shortUrl" source="shortUrl" />
        <DateTimeInput label="expiration" source="expiration" />
      </SimpleForm>
    </Create>
  );
};
