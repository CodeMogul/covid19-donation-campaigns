import React from 'react';
import { Select, Divider } from 'antd';
import 'antd/es/select/style/css';
import 'antd/es/divider/style/css';

import './Filter.css'


const { Option } = Select;

export default function Filter(props) {
  return (
    <>
      <Divider orientation="left">Filter By</Divider>
      <div className="filter-container">
        <label htmlFor="categories-select">Categories</label>
        <Select
          mode="multiple"
          placeholder="Please select"
          onChange={props.setCategories}
          tokenSeparators=","
          className="dropdown"
          showArrow
        >
          {
            props.categories.map(category => <Option key={category} value={category}>{category}</Option>)
          }
        </Select>

        <label>Organised By</label>
        <Select
          mode="multiple"
          placeholder="Please select"
          onChange={props.setOrganisers}
          tokenSeparators=","
          className="dropdown"
          showArrow
        >
          {
            props.organiserTypes.map(category => <Option key={category} value={category}>{category}</Option>)
          }
        </Select>
      </div>
      <Divider />
    </>
  )
}
