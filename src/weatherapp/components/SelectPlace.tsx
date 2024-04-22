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
    localStorage.city = value;
  };

  const onSearch = (value: string) => {
    console.log("search:", +value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <article className="flex flex-col content-center items-center">
      <h1>Выбрать город</h1>
      <ConfigProvider
        theme={{
          algorithm:
            themenow === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Select
          className="w-full lg:w-auto md:w-full sm:w-full"
          showSearch
          placeholder="Выберите город"
          optionFilterProp="город"
          onChange={onChange}
          onSearch={onSearch}
          defaultValue={
            typeof localStorage === "undefined" ? "0" : localStorage.city
          }
          filterOption={filterOption}
          options={placelist}
        />
      </ConfigProvider>
    </article>
  );
};
