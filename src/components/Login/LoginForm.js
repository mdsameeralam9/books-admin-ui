import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox,Row, } from 'antd';
import 'antd/dist/antd.css';
import './login.css'
class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { onSubmitHandler } = this.props;
        onSubmitHandler(values);
      }
    });
  };

  render() {
    
    const { getFieldDecorator } = this.props.form;
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>

      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
      </Row>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);


export default WrappedLoginForm;
