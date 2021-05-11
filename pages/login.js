import { Form, Input, Button, Checkbox, Row, Card } from 'antd';
import Layout from '../component/layout/Blanck'
import Head from 'next/head'
import { useState } from 'react';
import {Provider, signIn} from 'next-auth/client'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function onFinish(){
  signIn('credentials',{
    
  })
}

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="login">
        <div className="login-block">
          <Row justify="space-between" align="middle">
            <Card
              style={{ width: 350 }}
              title="Login"
              headStyle={{ background: '#0050b3', textAlign: 'center', color: 'white', fontSize: '22px', fontWeight: 'bold' }}
            >
              <Form
                {...layout}
                name="normal_login"
                className="login-form "
                initialValues={{ remember: true }}
                size="large"
              >
                <Form.Item
                  label="Email"
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input.Password
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" ghost block shape="round" htmlType="submit" className="login-form-button">
                    Log in
            </Button>
                </Form.Item>
              </Form>
            </Card>
          </Row>
        </div>
      </div>
    </>

  );
}

export default LoginPage;