import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

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
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
