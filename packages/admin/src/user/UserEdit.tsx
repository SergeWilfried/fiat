import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="Available balance" source="availableBalance" />
        <NumberInput label="Balance" source="balance" />
        <TextInput label="Business Name" source="businessName" />
        <ReferenceArrayInput
          source="customer"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Legal Term Versions" source="legalTermVersions" />
        <div />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <BooleanInput label="Privacy Policy" source="privacyPolicy" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "APPROVED", value: "Approved" },
            { label: "PENDING", value: "Pending" },
            { label: "REJECTED", value: "Rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="Terms and Conditions  "
          source="termsAndConditions"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
