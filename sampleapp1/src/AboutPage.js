import React from 'react';
import { Layout, Card, Typography, Row, Col } from 'antd';
import taj from './images/tajmahal_night.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const person1 = {
  name: "Alisha Sidiqqui",
  photo: taj, // Replace with a real image URL
  education: "B.Tech ECM",
  experience: "3rd Year Student",
  roll:"211053",
  skills: ["JavaScript", "React", "Node.js"],
  hobbies: ["Photography", "Traveling"]
};

const person2 = {
  name: "Khushi Gupta",
  photo: taj,
  education: "B.Tech ECM",
  experience: "3rd Year Student",
  roll:"211068",
  skills: ["Product Management", "UX Design", "C++"],
  hobbies: ["Reading", "Sketching"]
};

const cardStyle = {
  width: 300,
  margin: '20px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const AboutPage = () => {
  const renderPersonCard = (person) => (
    <Card
      style={cardStyle}
      
    >
      <div style={{ padding: '16px' }}>
        <Title level={4}>{person.name}</Title>
      <p>{person.name}</p>
      <p>
        Roll No:- {person.roll}
      </p>
        <p>
{person.education}
        </p>
        <p>
{person.experience}
        </p>
        {/* <Paragraph>{person.title}</Paragraph>
        <Paragraph><strong>Education:</strong> {person.education}</Paragraph>
        <Paragraph><strong>Experience:</strong> {person.experience}</Paragraph>
        <Paragraph><strong>Skills:</strong> {person.skills.join(', ')}</Paragraph>
        <Paragraph><strong>Hobbies:</strong> {person.hobbies.join(', ')}</Paragraph> */}
      </div>
    </Card>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Header style={{ background: '#001529', padding: '0 50px', display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontSize: '20px', flex: 1 }}>My Company</div>
        <div style={{ color: '#fff' }}>Company Name XYZ</div>
      </Header> */}
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', minHeight: '280px' }}>
          <Title level={2} title='About US' style={{ textAlign: 'center', margin: '20px 0' }}>About Us</Title>
          <Row justify="center" gutter={[16, 16]}>
            <Col>{renderPersonCard(person1)}</Col>
            <Col>{renderPersonCard(person2)}</Col>
            <p>This project has been done under the topic<b> HERITAGE AR/VR CHALLENGE: PRESERVING AND ENHANCING CULTURAL HERITAGE THROUGH AUGMENTED / VIRTUAL REALITY </b>.
            </p>
          </Row>
          

        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
        Website ©2024 Created by Alisha and Khushi
      </Footer>
    </Layout>
  );
};

export default AboutPage;
