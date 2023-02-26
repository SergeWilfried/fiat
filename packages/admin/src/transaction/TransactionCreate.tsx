import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="Recipient"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Amount" source="amount" />
        <TextInput label="Currency" source="currency" />
        <NumberInput label="Fee" source="fee" />
        <TextInput label="Metadata" source="metadata" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "SUCCESSFUL", value: "Successful" },
            { label: "PENDING", value: "Pending" },
            { label: "FAILED", value: "Failed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="transactionType"
          label="TransactionType"
          choices={[
            { label: "CREDIT", value: "Credit" },
            { label: "DEBIT", value: "Debit" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="Enitity">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
