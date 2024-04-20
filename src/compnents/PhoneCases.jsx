import React, { useState } from "react";
import { Select, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaApple } from "react-icons/fa";
const ModelData = {
  Apple: [
    "Iphone 15",
    "Iphone 15 Pro",
    "Iphone 15 Pro Max",
    "Iphone 14",
    "Iphone 14 Plus",
    "Iphone 14 Pro",
    "Iphone 14 Pro Max",
  ],
  OnePlus: [
    "OnePlus 12",
    "OnePlus 12R",
    "OnePlus 11",
    "OnePlus 11R",
    "OnePlus 10",
    "OnePlus 10R",
  ],
  Samsung: [
    "OnePlus 12",
    "OnePlus 12R",
    "OnePlus 11",
    "OnePlus 11R",
    "OnePlus 10",
    "OnePlus 10R",
  ],
  Nothing: [
    "OnePlus 12",
    "OnePlus 12R",
    "OnePlus 11",
    "OnePlus 11R",
    "OnePlus 10",
    "OnePlus 10R",
  ],
};
const BrandName = ["Apple", "OnePlus", "Samsung", "Nothing"];
const PhoneCases = () => {
  const [model, setModel] = useState(ModelData[BrandName[0]]);
  const [secondModel, setSecondModel] = useState(ModelData[BrandName[0]][0]);
  const handleProvinceChange = (value) => {
    setModel(ModelData[value]);
    setSecondModel(ModelData[value][0]);
  };
  const onSecondModelChange = (value) => {
    setSecondModel(value);
  };
  return (
    <center>
      <div className="search_container">
        <h1>Phone Cases</h1>
        <p className="fs-5 text-secondary text-start mx-5">QUICK SEARCH</p>
        <Space wrap>
          <Select
            defaultValue={BrandName[0]}
            style={{
              width: 200,
            }}
            onChange={handleProvinceChange}
            options={BrandName.map((province) => ({
              label: province,
              value: province,
            }))}
          />
          <Select
            style={{
              width: 200,
            }}
            value={secondModel}
            onChange={onSecondModelChange}
            options={model.map((city) => ({
              label: city,
              value: city,
            }))}
          />
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </Space>
      </div>

      <FaApple className="apple_icon" />
    </center>
  );
};
export default PhoneCases;
