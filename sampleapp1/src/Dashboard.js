import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ThreeDImage from './ThreeDImage';
import Card from 'antd/es/card/Card';
import SevenWondersCarousel from './SevenWondersCarousel';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  render() {
    return (<>
      <Header className="header">
           <div className="logo" /> 
           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
             <Menu.Item key="1">nav 1</Menu.Item>
             <Menu.Item key="2">nav 2</Menu.Item>
             <Menu.Item key="3">nav 3</Menu.Item>
           </Menu>
         </Header>
      {/* <SevenWondersCarousel/> */}
      <div style={{width:"50%", height:"50%"}}><ThreeDImage/></div>
      </>
      // <Layout>
      //   <Header className="header">
      //     <div className="logo" /> 
      //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      //       <Menu.Item key="1">nav 1</Menu.Item>
      //       <Menu.Item key="2">nav 2</Menu.Item>
      //       <Menu.Item key="3">nav 3</Menu.Item>
      //     </Menu>
      //   </Header>
      //   <Content style={{ padding: '0 50px' }}>
      //     <Breadcrumb style={{ margin: '16px 0' }}>
      //       <Breadcrumb.Item>Home</Breadcrumb.Item>
      //       <Breadcrumb.Item>List</Breadcrumb.Item>
      //       <Breadcrumb.Item>App</Breadcrumb.Item>
      //     </Breadcrumb>
         
      //   </Content>
           
      //      {/* <ThreeDImage/> */}
      //      <SevenWondersCarousel/>

      // </Layout>
    );
  }
}

export default Dashboard;
