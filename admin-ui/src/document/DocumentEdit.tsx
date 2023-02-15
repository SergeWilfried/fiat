import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <div />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
