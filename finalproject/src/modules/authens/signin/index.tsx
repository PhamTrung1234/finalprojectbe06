import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import  { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [found, setFound] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex flex-col items-center justify-center py-20">
      
      <Card style={{ width: "400px" }}>
        <h2 className="font-[500] text-2xl">Sign in</h2>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <span className="font-[500]">Email</span>
          <Form.Item
            name="email"
            className="mb-3"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <span className="font-[500]">Password</span>
          <Form.Item
            name="password"
            className="mb-3"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button className="w-full bg-[#ffd814]" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        
        <button
          onClick={() => {
            setFound(!found);
          }}
        >
          {found ? <CaretDownOutlined /> : <CaretRightOutlined />}Need help?
        </button>
        {found && (
          <ul>
            <li>
              <Link to={"/"}>Forgot your password?</Link>
            </li>
            <li>
              <Link to={"/"}>Other issues with Sign-In</Link>
            </li>
          </ul>
        )}
        
      </Card>
      <button className="bg-white py-2 w-[400px] mt-10 rounded-md">
        <Link to={"/sign-up"}>Create  account</Link>
      </button>
    </div>
  );
}
