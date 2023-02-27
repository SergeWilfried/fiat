import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const BankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="country"
          label="Country"
          choices={[
            { label: "Burkina Faso", value: "BurkinaFaso" },
            { label: "Cote Divoire", value: "CoteDivoire" },
            { label: "Mali", value: "Mali" },
            { label: "Togo", value: "Togo" },
            { label: "Benin", value: "Benin" },
            { label: "Senegal", value: "Senegal" },
            { label: "Niger", value: "Niger" },
            { label: "Cameroon", value: "Cameroon" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
    </Create>
  );
};
