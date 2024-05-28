import React from 'react';
import { Layout, Menu, Typography, Row, Col, Button, Card } from 'antd';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ThreeDImage from './ThreeDImage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{flex:1}}>
          <Menu.Item key="1"><Link to="/"></Link>Home</Menu.Item>
                   <Menu.Item key="4"><Link to="/tajmahal"></Link>3D Modal</Menu.Item>
          <Menu.Item key="6"><Link to="/about"></Link>About</Menu.Item>
        </Menu>
        <div className="company-name">Taj Tales</div>
        {/* <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">History</Menu.Item>
          <Menu.Item key="3">Architecture</Menu.Item>
          <Menu.Item key="4">Visitor Information</Menu.Item>
          <Menu.Item key="5">Gallery</Menu.Item>
          <Menu.Item key="6">Contact</Menu.Item>
        </Menu>
        <div className="company-name">Company Name XYZ</div>
      </Header> */}

        
      </Header>
      </Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tajmahal" element={<ThreeDImage />} />
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <HomePage/>
    </div>
  );
};

export default App;