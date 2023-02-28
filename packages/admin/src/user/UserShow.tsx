import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Available balance" source="availableBalance" />
        <TextField label="Balance" source="balance" />
        <TextField label="Business Name" source="businessName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="Legal Term Versions" source="legalTermVersions" />
        <TextField label="Messages" source="messages" />
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
      </SimpleShowLayout>
    </Show>
  );
};
