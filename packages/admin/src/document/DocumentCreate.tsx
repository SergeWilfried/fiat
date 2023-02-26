import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
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
      </SimpleForm>
    </Create>
  );
};
