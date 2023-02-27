import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const BankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Country" source="country" />
        <TextInput label="Currency" source="currency" />
        <TextInput label="InstitutionName" source="institutionName" />
        <SelectInput
          source="instutionType"
          label="InstutionType"
          choices={[
            { label: "Mobile Money", value: "MobileMoney" },
            { label: "Bank", value: "Bank" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
