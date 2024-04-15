import React, { Dispatch, SetStateAction } from "react";

import type { MenuProps } from "antd";
import { Dropdown, Space, ConfigProvider, theme } from "antd";

export const CityChanger = ({
  city,
  setCity,
}: {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}) => {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    alert(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: <p>Минск</p>,
      key: "0",
    },
    {
      label: <p>Брест</p>,
      key: "1",
    },
    {
      label: <p>Витебск</p>,
      key: "2",
    },
    {
      label: <p>Гомель</p>,
      key: "3",
    },
    {
      label: <p>Гродно</p>,
      key: "4",
    },
    {
      label: <p>Могилев</p>,
      key: "5",
    },
  ];

  return (
    <article className="flex flex-col justify-start content-center items-center">
      <h1>Выбрать город</h1>
      <ConfigProvider
        theme={{
          algorithm:
            localStorage.theme === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        <Dropdown
          menu={{
            items,
            onClick,

            selectable: true,
            defaultSelectedKeys: ["0"],
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Space>
            <h1>{city}</h1>
          </Space>
        </Dropdown>
      </ConfigProvider>
    </article>
  );
};
