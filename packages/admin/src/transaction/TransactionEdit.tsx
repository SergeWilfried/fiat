import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
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
            { label: "FIAT", value: "Fiat" },
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
    </Edit>
  );
};
