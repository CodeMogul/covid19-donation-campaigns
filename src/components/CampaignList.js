import React, { Component } from 'react'
import { Button, List } from 'antd';
import Avatar from 'antd/es/avatar';
// import List from 'antd/es/list';
import Descriptions from 'antd/es/descriptions';
import 'antd/es/list/style/css';
import 'antd/es/avatar/style/css';
import 'antd/es/descriptions/style/css';
import 'antd/es/button/style/css';

import './CampaignList.css';

export default class CampaignList extends Component {
  getLinkText = (link, text) => {
    if (link !== '#')
      return (<a href={link} rel="noopener noreferrer" target="_blank">{text}</a>);
    else return text;
  }

  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              document.getElementById("main-content").scrollIntoView();
            },
            pageSize: 5,
          }}
          dataSource={this.props.listData}
          renderItem={({ initiator, ...item }) => (
            <List.Item
              key={item.name}
              extra={(
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  <img className="cover-image" alt={`${initiator.name} Banner`} src={item.image_url} />
                </a>
              )}
              className="list-item"
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={ this.getLinkText(item.link, item.name) }
                description={item.description}
              />

              <div className="item-content-container">

                <Descriptions column={2} bordered size="small" style={{ flexBasis: '85%' }}>
                  <Descriptions.Item label="An Initiative By">
                    { this.getLinkText(initiator.link, initiator.name) }
                  </Descriptions.Item>
                  <Descriptions.Item label="NGO Partner">
                    { this.getLinkText(item.partner_ngo.link, item.partner_ngo.name) }
                  </Descriptions.Item>
                  <Descriptions.Item label="Platform Partner">
                    { this.getLinkText(item.partner_platform.link, item.partner_platform.name) }
                  </Descriptions.Item>
                  <Descriptions.Item label="Tax Exempted u/s 80G">{item.tax_exemption ? "Yes" : "No"}</Descriptions.Item>
                  <Descriptions.Item label="Category">{item.category}</Descriptions.Item>
                  <Descriptions.Item label="Location">{item.location}</Descriptions.Item>
                </Descriptions>

                <Button type="primary" href={item.link} target="_blank">Know More</Button>
              </div>

            </List.Item>
          )}
        />
      </div>
    )
  }
}
