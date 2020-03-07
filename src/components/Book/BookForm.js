import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';
import axios from "axios";

import 'antd/dist/antd.css';
import './Book.css'
class BookForm extends Component {

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
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Title"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('isbn', {
              rules: [{ required: true, message: 'Please input your isbn!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Isbn"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pageCount', {
              rules: [{ required: true, message: 'Please input your pageCount!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="PageCount"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('publishedDate', {
              rules: [{ required: true, message: 'Please input your publishedDate!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="PublishedDate"
              />,
            )}
          </Form.Item>
          {/* <Form.Item>
          {getFieldDecorator('thumbnailUrl', {
            rules: [{ required: true, message: 'Please input your thumbnailUrl!' }],
          })(
            <Input
              prefix={<Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="ThumbnailUrl"
              type="file"
            />,
          )}
        </Form.Item> */}
          <Form.Item>
            {getFieldDecorator('shortDescription', {
              rules: [{ required: true, message: 'Please input your shortDescription!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="ShortDescription"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('longDescription', {
              rules: [{ required: true, message: 'Please input your longDescription!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="longDescription"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('status', {
              rules: [{ required: true, message: 'Please input your status!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="status"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('authors', {
              rules: [{ required: true, message: 'Please input your authors!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="authors"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('categories', {
              rules: [{ required: true, message: 'Please input your categories!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="categories"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('price', {
              rules: [{ required: true, message: 'Please input your price!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="price"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('thumbnailUrl', {
              rules: [{ required: true, message: 'Please input your thumbnailUrl!' }],
            })(
              <Input
                prefix={<Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="ThumbnailUrl"
                type="file"
                name="thumbUrl"
                onChange={this.props.onChangeHandler}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Add Book
          </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </Row>
    );
  }
}

const WrappedBookForm = Form.create({ name: 'normal_login' })(BookForm);


export default WrappedBookForm;
