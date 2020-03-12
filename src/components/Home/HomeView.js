import React, { Component } from 'react';
import Books from '../Books/Books';
import './Home.css'
import { Form, Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BookOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Book } from '../Book';
import { MenuItem } from 'react-bootstrap';

const { Header, Sider, Content } = Layout;

export default class HomeForm extends Component {
  state = {
    collapsed: false,
    pathname: ""
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    console.log("componentDidMount", this.props.location.pathname)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate prevProps", prevProps)
    console.log("current props", this.props)
    console.log("componentDidUpdate prevState", prevState)

    if(this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ pathname: this.props.location.pathname })
    }

    

  }

  render() {
    //this.setState({ pathname: this.props.location.pathname})
    console.log("render called")
    const { match: {  url } } = this.props;
    return (

      <Layout>

        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.pathname}>
            <Menu.Item key="1">
              <BookOutlined />
              <span>Books</span>
              <Link to={`${url}/books`}> </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <BookOutlined />
              <span>Add Book</span>
              <Link to={`${url}/book`}> </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <UserOutlined />
              <span>Admin</span>
              <Link to="#"> </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/home/books" component={Books} />
              <Route path="/home/book" component={Book} />
            </Switch>
            

          </Content>
        </Layout>
      </Layout>
    );
  }
}