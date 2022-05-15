import React from "react";
import { Layout, Menu, Breadcrumb} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import {
    CommentOutlined,
    DashboardOutlined,
     FormOutlined,
     UserOutlined
  } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;



export default function LayoutApp({children}){
    const navigate = useNavigate();

    function getItem(label, key, icon, children,route) {
        return {
          key,
          icon,
          children,
          label,
          route
        };
      }
      const items = [  
        getItem('Dashboard', '/', <DashboardOutlined />),
        getItem('Posts', 'posts', <FormOutlined/>),
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('Tom', '3'),
          getItem('Bill', '4'),
          getItem('Alex', '5'),
        ]),
        getItem('Comments', 'comments', <CommentOutlined />),
      ];
      function onClickMenu(e){
        console.log(e);
        navigate(e.key);  
      }
    return(
        <Layout style={{minHeight:'100vh'}}>
            <Sider collapsible>
                <Menu theme="dark" mode="inline" items={items} defaultSelectedKeys={['1']} onClick={onClickMenu}/>
              
            </Sider>
            <Layout> 
                <Content  style={{ padding: '18px' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}