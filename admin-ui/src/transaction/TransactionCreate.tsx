import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
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
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput label="Fee" source="fee" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "SUCCESSFUL", value: "Successful" },
            { label: "PENDING", value: "Pending" },
            { label: "FAILED", value: "Failed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="transactionSubtype"
          label="TransactionSubtype"
          choices={[
            { label: "MOMO", value: "Momo" },
            { label: "BANK", value: "Bank" },
            { label: "CASH", value: "Cash" },
            { label: "CRYPTO", value: "Crypto" },
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
      </SimpleForm>
    </Create>
  );
};
