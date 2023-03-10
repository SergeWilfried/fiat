import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Birthday" source="dob" />
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Phone" source="phone" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="CustomerId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="AccountNumber" source="accountNumber" />
            <TextField label="AccountType" source="accountType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <ReferenceField
              label="Customers"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="CustomerId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DocumentType" source="documentType" />
            <TextField label="Expiring At" source="expiringAt" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Status" source="status" />
            <TextField label="Tags" source="tags" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URL" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
