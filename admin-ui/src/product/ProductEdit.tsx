import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="color"
          label="color"
          choices={[
            { label: "blue", value: "Blue" },
            { label: "green", value: "Green" },
            { label: "orange", value: "Orange" },
            { label: "purple", value: "Purple" },
            { label: "Yellow", value: "Yellow" },
            { label: "red", value: "Red" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
