import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Entities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
