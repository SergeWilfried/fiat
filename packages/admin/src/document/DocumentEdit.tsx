import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
            { label: "PENDING", value: "Pending" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Tags" source="tags" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
