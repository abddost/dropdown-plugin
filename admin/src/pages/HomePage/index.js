// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import {
  MultiSelect,
  MultiSelectOption,
  SingleSelectOption,
  SingleSelect,
  Flex,
  Box,
} from "@strapi/design-system";

const HomePage = () => {
  const [values, setValues] = useState([]);
  return (
    <Box direction="column" alignItems="center">
      
      <Box direction="column">
      <SingleSelect
        label="Services"
        placeholder="Diognostika"
        onClear={() => {
          setValue(undefined);
        }}
        value={values}
        onChange={setValues}
      >
        <SingleSelectOption value="apple">Diognostika</SingleSelectOption>
        <SingleSelectOption value="apple">Onkologiya</SingleSelectOption>
        <SingleSelectOption value="apple">Nevrologiya</SingleSelectOption>
      </SingleSelect>
      <MultiSelect
        label="SubServices"
        required
        placeholder="Konsultatsiya ankologa"
        onClear={() => {
          setValues([]);
        }}
        value={values}
        onChange={setValues}
        withTags
      >
        <MultiSelectOption value="apple">Apple</MultiSelectOption>
      </MultiSelect>
      </Box>
      
    </Box>
  );
};

export default HomePage;
