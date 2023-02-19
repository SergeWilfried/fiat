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

import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Business Name" source="businessName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Legal Term Versions" source="legalTermVersions" />
        <TextField label="Messages" source="messages" />
        <TextField label="Password2" source="password2" />
        <TextField label="Phone" source="phoe" />
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
          reference="Account"
          target="UserId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="AccountNumber" source="accountNumber" />
            <TextField label="AccountType" source="accountType" />
            <TextField label="Available balance" source="availableBalance" />
            <TextField label="Balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="UserId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="DocumentType" source="documentType" />
            <TextField label="Expiring At" source="expiringAt" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Status" source="status" />
            <TextField label="Tags" source="tags" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URL" source="url" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
