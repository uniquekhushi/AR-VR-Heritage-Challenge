import React from 'react';
import { Layout, Menu, Typography, Row, Col, Button, Card } from 'antd';
import tajmahal from './images/taj.jpg'; // Ensure you have an image of the Taj Mahal in your project
import taj_day from './images/taj_daytime.jpg';
import taj_sunset from './images/tajmahal_sunset.jpg';
import taj_night from './images/tajmahal_night.jpg';
import './App.css';
const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;


const HomePage = () => {
  return (
    <Layout className="layout">
      
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ marginTop: '50px' }}>
          <Row justify="center" align="middle">
            <Col span={24} style={{ textAlign: 'center' }}>
              <img
                src={tajmahal}
                alt="Taj Mahal"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Col>
            <Col span={16} style={{ marginTop: '20px' }}>
              <Title level={2} style={{ textAlign: 'center' }}>Welcome to the Taj Mahal</Title>
              <Paragraph style={{ fontSize: '16px', textAlign: 'center' }}>
                The Taj Mahal, an ivory-white marble Tombstone on the south bank of the Yamuna river in the Indian city of Agra, was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. The Taj Mahal is an iconic symbol of India and a masterpiece of Mughal architecture, known for its stunning beauty, intricate details, and its story of eternal love. This UNESCO World Heritage Site attracts millions of visitors from around the world each year.
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', textAlign: 'center' }}>
                The construction of the Taj Mahal was completed in 1653 and involved thousands of artisans and craftsmen. The tomb is part of a larger complex that includes a mosque, a guest house, and extensive formal gardens bounded on three sides by a crenellated wall. The Taj Mahal is universally admired for its architectural beauty, harmonious proportions, and its impressive use of white marble adorned with semi-precious stones.
              </Paragraph>
              <div style={{ textAlign: 'center' }}>
                <Button type="primary" size="large" href='https://www.tajmahal.gov.in/'>Learn More</Button>
              </div>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ marginTop: '50px' }}>
            <Col span={16}>
              <Title level={2}>History</Title>
              <Paragraph>
                The history of the Taj Mahal is as fascinating as the structure itself. Shah Jahan, the Mughal emperor, was devastated by the death of his beloved wife Mumtaz Mahal during childbirth. In her memory, he decided to build the most beautiful mausoleum the world had ever seen. The construction began in 1632 and took 21 years to complete. The emperor's grief and his vision of love and beauty were captured in the architecture of the Taj Mahal, making it an everlasting symbol of love.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ marginTop: '50px' }}>
            <Col span={16}>
              <Title level={2}>Architecture</Title>
              <Paragraph>
                The architecture of the Taj Mahal combines elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles. The most striking feature is the white marble dome that surmounts the tomb. The dome is nearly 35 meters (115 ft) high and is surrounded by four smaller domed kiosks (chattris). The marble is inlaid with precious and semi-precious stones in intricate patterns, including floral designs and calligraphy.
              </Paragraph>
              <Paragraph>
                The Taj Mahal also features four minarets, one at each corner of the plinth, which are designed slightly outward to protect the main tomb in case of a collapse. The gardens of the Taj Mahal follow the charbagh design, which is a Persian-inspired quadrilateral layout.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ marginTop: '50px' }}>
            <Col span={16}>
              <Title level={2}>Visitor Information</Title>
              <Paragraph>
                The Taj Mahal is open to visitors every day except Fridays, from sunrise to sunset. It is also open for night viewing on the full moon night and two nights before and after the full moon. Tickets can be purchased online or at the entry gates. Visitors are advised to respect the sanctity of the site and follow the guidelines provided by the authorities.
              </Paragraph>
              <Paragraph>
                Nearby attractions include the Agra Fort, Fatehpur Sikri, and the Mehtab Bagh. Agra is well-connected by road, rail, and air, making it easily accessible for tourists from all over the world.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Col span={16}>
              <Title level={2}>Gallery</Title>
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    cover={<img alt="Taj Mahal - Daytime" src={taj_day} />}
                  >
                    <Card.Meta title="Taj Mahal - Daytime" description="The Taj Mahal during the day" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    cover={<img alt="Taj Mahal - Sunset" src={taj_sunset} />}
                  >
                    <Card.Meta title="Taj Mahal - Sunset" description="The Taj Mahal at sunset" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    cover={<img alt="Taj Mahal - Night" src={taj_night} />}
                  >
                    <Card.Meta title="Taj Mahal - Night" description="The Taj Mahal at night" />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Taj Mahal Website ©2024 Created by Alisha and Khushi
      </Footer>
    </Layout>
  );
};

export default HomePage;
