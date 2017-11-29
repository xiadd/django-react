import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        e.preventDefault()
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" method='post' action='/user/register/'>
        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Register</h1>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, type: 'email', message: '请输入邮箱!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="邮箱" name="email" type="email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" name="username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" name="password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('repassword', {
            rules: [{ required: true, message: '请确认密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="重复密码" name="repassword" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码?</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          或者 <a href="/user/register/">立即注册</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDom.render(
  <WrappedNormalLoginForm />,
  document.getElementById('app')
)