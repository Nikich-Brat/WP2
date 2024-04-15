import React, { Dispatch, SetStateAction } from "react";
import { Select, Dropdown, Space, ConfigProvider, theme } from "antd";

import type { MenuProps } from "antd";

import { placelist } from "../constants/weatherstek/placeslist";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      algorithm:
        localStorage.theme === "dark"
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
    }}
  >
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: placelist[0].value,
          label: placelist[0].label,
        },
        {
          value: placelist[1].value,
          label: placelist[1].value,
        },
        {
          value: placelist[2].value,
          label: placelist[2].value,
        },
      ]}
    />
  </ConfigProvider>
);

export default App;
