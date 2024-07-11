import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="originalUrl" source="originalUrl" />
        <TextInput label="shortUrl" source="shortUrl" />
        <DateTimeInput label="expiration" source="expiration" />
      </SimpleForm>
    </Edit>
  );
};
