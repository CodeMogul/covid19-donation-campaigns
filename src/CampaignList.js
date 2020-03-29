import React, { Component } from 'react'
import { Button, List } from 'antd';
import Avatar from 'antd/es/avatar';
// import List from 'antd/es/list';
import Descriptions from 'antd/es/descriptions';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import 'antd/es/list/style/css';
import 'antd/es/avatar/style/css';
import 'antd/es/descriptions/style/css';
import 'antd/es/button/style/css';

import './CampaignList.css';

import listData from './campaigns.json';

export default class CampaignList extends Component {
  render() {
    return (
      <div className="list-container">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={({ initiator, ...item }) => (
            <List.Item
              key={item.name}
              // actions={[
              //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              // ]}
              extra={(
                <a href={item.link}>
                  <img className="cover-image" alt="logo" src={item.image_url} />
                </a>
              )}
              className="list-item"
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={<a href={item.link}>{item.name}</a>}
                description={item.description}
              />

              <div className="item-content-container">

                <Descriptions column={2} bordered size="small" style={{ flexBasis: '85%' }}>
                  <Descriptions.Item label="An Initiative By">
                    <a href={initiator.link}>{initiator.name}</a>
                  </Descriptions.Item>
                  {/* <Descriptions.Item label="Remark">empty</Descriptions.Item> */}
                  <Descriptions.Item label="NGO Partner">
                    <a href={item.partner_ngo.link}>{item.partner_ngo.name}</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Platform Partner">
                    <a href={item.partner_platform.link}>{item.partner_platform.name}</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Tax Exempted u/s 80G">{item.tax_exemption ? "Yes" : "No"}</Descriptions.Item>
                  <Descriptions.Item label="Category">{item.category}</Descriptions.Item>
                  <Descriptions.Item label="Location">{item.location}</Descriptions.Item>
                </Descriptions>

                <Button type="primary" href={item.link}>Know More</Button>
              </div>

            </List.Item>
          )}
        />
      </div>
    )
  }
}
