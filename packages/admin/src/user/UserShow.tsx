import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Business Name" source="businessName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="Legal Term Versions" source="legalTermVersions" />
        <TextField label="Messages" source="messages" />
        <TextField label="Password2" source="password2" />
        <TextField label="Phone" source="phone" />
        <BooleanField label="Privacy Policy" source="privacyPolicy" />
        <TextField label="Roles" source="roles" />
        <TextField label="Status" source="status" />
        <BooleanField
          label="Terms and Conditions  "
          source="termsAndConditions"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Transaction"
          target="UserId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Fee" source="fee" />
            <TextField label="ID" source="id" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Status" source="status" />
            <TextField label="TransactionType" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Enitity" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
