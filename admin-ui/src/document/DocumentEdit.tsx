import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  DateInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { UserTitle } from "../user/UserTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="documentType"
          label="DocumentType"
          choices={[
            { label: "DRIVERLICENCE", value: "Driverlicence" },
            { label: "PASSPORT", value: "Passport" },
            { label: "GOVERNMENT ID", value: "GovernmentId" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateInput label="Expiring At" source="expiringAt" />
        <TextInput label="Image" source="image" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "APPROVED", value: "Approved" },
            { label: "REJECTED", value: "Rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Tags" source="tags" />
        <TextInput label="URL" source="url" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
