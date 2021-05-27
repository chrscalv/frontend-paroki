import { Form, Input, Button, Checkbox, Row, Card, Divider } from 'antd';
import Layout from '../component/layout/Blanck'
import Head from 'next/head'
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const login = async (values) => {
  const response = await signIn('credentials',
  {
    email: values.email,
    password: values.password,

    callbackUrl: `${window.location.origin}/admin` 
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
              headStyle={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}
            >
              <Form
                {...layout}
                name="normal_login"
                className="Login Page"
                initialValues={{ remember: true }}
                size="large"
                onFinish={login}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input  />
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
                {/* <Form.Item>
                  <Divider orientation="center">Or</Divider>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" block shape="round" ghost >SignIn with Google</Button>
                </Form.Item> */}
              </Form>
            </Card>
          </Row>
        </div>
      </div>
    </>
  );
}

export default LoginPage;