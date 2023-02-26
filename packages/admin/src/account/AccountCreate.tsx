import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AccountNumber" source="accountNumber" />
        <SelectInput
          source="accountType"
          label="AccountType"
          choices={[
            { label: "MobileMoney", value: "MobileMoney" },
            { label: "IBAN", value: "Iban" },
            { label: "Wallet", value: "Wallet" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Available balance" source="availableBalance" />
        <NumberInput label="Balance" source="balance" />
        <SelectInput
          source="currency"
          label="Currency"
          choices={[
            { label: "XOF", value: "Xof" },
            { label: "EUR", value: "Eur" },
            { label: "USD", value: "Usd" },
            { label: "CELO", value: "Celo" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customers"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "APPROVED", value: "Approved" },
            { label: "PENDING", value: "Pending" },
            { label: "BLOCKED", value: "Blocked" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
