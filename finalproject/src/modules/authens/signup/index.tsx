import { Button, Card, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";


export default function SignUp() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
      console.log("Received values of form: ", values);
    };
  return (
    <div className="flex flex-col justify-center items-center py-20">
     
      <Card style={{ width: "400px" }}>
        <h2 className="font-[500] text-2xl mb-3">Create account</h2>
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
             <span className='font-[500]'>Fullname</span>
          <Form.Item
            name="nickname"
            className='mb-3'
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <span className='font-[500]'>Email</span>
          <Form.Item
            name="email"
              className='mb-3'
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
          <span className='font-[500]'>Password</span>
          <Form.Item
            name="password"
            className='mb-3'
            rules={[
              { 
                required: true,
                min:6,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
            <span>
            Passwords must be at least 6 characters.</span>
          </Form.Item>
          <span className='font-[500]'>Confirm Password</span>
          <Form.Item
            name="confirm"
             className='mb-3'
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            className="mb-3"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
          <Button className='w-full bg-[#ffd814]'  htmlType="submit">
          Sign up
        </Button>
          </Form.Item>
        </Form>
       
        
        <p className="mt-5">Already have an account? <Link to={"/login"} className="font-[500]">Sign in</Link></p>
      </Card>
    </div>
  )
}
