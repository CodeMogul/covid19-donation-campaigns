import React from 'react';
import { Select } from 'antd';
import 'antd/es/select/style/css';

import './Filter.css'


const { Option } = Select;

export default function Filter(props) {
  return (
    <div className="filter-container">
      <label htmlFor="categories-select">Categories</label>
      <Select
        mode="multiple"
        placeholder="Please select"
        // defaultValue={['a10', 'c12']}
        onChange={props.setCategories}
        tokenSeparators=","
        className="dropdown"
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
      >
        {
          props.organiserTypes.map(category => <Option key={category} value={category}>{category}</Option>)
        }
      </Select>

      <label>at Locations</label>
      <Select
        mode="multiple"
        placeholder="Please select"
        onChange={props.setLocations}
        tokenSeparators=","
        className="dropdown"
      >
        {
          props.locations.map(category => <Option key={category} value={category}>{category}</Option>)
        }
      </Select>
    </div>
  )
}
