import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};
