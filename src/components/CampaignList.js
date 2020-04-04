import React, { Component } from 'react'
import { Button, List, Card } from 'antd';
import Avatar from 'antd/es/avatar';
import 'antd/es/list/style/css';
import 'antd/es/avatar/style/css';
import 'antd/es/button/style/css';
import 'antd/es/card/style/css';

import './CampaignList.css';

const Description = ({ label, title, style, children, ...others }) => (
  <p style={{ margin: 0, paddingBottom: 8, color: 'black', ...style }} className="ellipsis" {...others}>
    <span style={{ width: 96, display: 'inline-block' }}>{label} {': '}</span>
    <span title={title} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>{children}</span>
  </p>
)

export default class CampaignList extends Component {
  getLinkText = (link, text, donationLink = false) => {
    if (link !== '#')
      return (
        <a
          href={link}
          className={donationLink ? 'donation-link' : 'external-link'}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>);
    else return text;
  }

  render() {
    return (
      <div>
        <List
          grid={{
            gutter: [24, 8],
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          size="large"
          pagination={{
            onChange: page => {
              document.getElementById("main-content").scrollIntoView();
            },
            pageSize: 8,
          }}
          dataSource={this.props.listData}
          renderItem={({ initiator, ...item }) => {
            const file_name = initiator.name.toLowerCase().split(' ').join('_');
            return (
            <List.Item
              key={item.name}
            >
              <Card
                cover={
                  <div style={{ position: "relative" }}>
                    {item.tax_exemption && <span className="tax-tag">Tax Benefits</span>}
                    <img
                      className="cover-image"
                      alt={`${initiator.name} Banner`}
                      src={`/images/banner/${file_name}.jpg`}
                    />
                  </div>
                }
                className="card"
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
              >
                <Card.Meta
                  avatar={<Avatar src={`/images/avatar/${file_name}.png`} />}
                  title={this.getLinkText(item.link, item.name, true)}
                />
                <p className="card-meta">
                  {item.description}
                </p>

                  <Description label="Initiative By">
                    {this.getLinkText(initiator.link, initiator.name)}
                  </Description>
                  <Description label="NGO Partner" title={item.partner_ngo.name}>
                    {this.getLinkText(item.partner_ngo.link, item.partner_ngo.name)}
                  </Description>
                  {/*
                      <Descriptions.Item label="Platform Partner">
                        { this.getLinkText(item.partner_platform.link, item.partner_platform.name) }
                      </Descriptions.Item>
                    */}
                  <Description label="Category" title={item.category} >
                    {item.category}
                  </Description>
                  {/* <Descriptions.Item label="Location">{item.location}</Descriptions.Item> */}

                  <Button type="primary"
                    className="donation-link"
                    href={item.link}
                    target="_blank"
                    shape="round"
                    block
                  >
                    Know More
                  </Button>
              </Card>
            </List.Item>
          )}
        }
        />
      </div>
    )
  }
}
