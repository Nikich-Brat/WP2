import React, { Dispatch, SetStateAction } from "react";
import { Select, ConfigProvider, theme } from "antd";
import { placelist } from "../constants/weatherstek/placeslist";

export const CityChanger = ({
  themenow,
  setCity,
}: {
  themenow: string;
  setCity: (text: number) => void;
}) => {
  const onChange = (value: string) => {
    setCity(+value);
    localStorage.place = value;
  };

  const onSearch = (value: string) => {
    console.log("search:", +value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <article className="flex flex-col justify-start content-center items-center">
      <h1>Выбрать город</h1>
      <ConfigProvider
        theme={{
          algorithm:
            themenow === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          defaultValue={
            typeof localStorage === "undefined" ? "0" : localStorage.place
          }
          filterOption={filterOption}
          options={placelist}
        />
      </ConfigProvider>
    </article>
  );
};
