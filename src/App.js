import React, {Component} from "react";
import "./App.css";
import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;


class App extends Component {
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Sider style={{overflow: 'auto'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">用户模块</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">表单</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">表格</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">图表</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o"/>
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team"/>
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop"/>
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2017 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
