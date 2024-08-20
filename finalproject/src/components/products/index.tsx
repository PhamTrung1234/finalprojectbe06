import { DownOutlined } from "@ant-design/icons";
import { Checkbox } from "@mui/joy";
import { Col, Pagination, PaginationProps, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

export default function Products() {
  const [found, setFound] = useState(false);
  const { Text } = Typography;
  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <span>Filter : </span>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => {
                setFound(!found);
              }}
            >
              <span className="mr-2">Availability</span>
              <DownOutlined style={{ fontSize: "11px" }} />
            </button>
            {found && (
              <div className="box-modal-product w-[300px] bg-white p-4  rounded-[15px]">
                <div className="flex justify-between pb-5 border-b-[1px]">
                  <span>0 selected</span>
                  <button>Reset</button>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  <Checkbox label="In stock (64)" />
                  <Checkbox label="Out of stock (56)" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <span>110 product</span>
        </div>
      </div>
      <div className="mt-10">
        <Row gutter={[50,50]}>
          <Col span={6}>
            <div className="flex flex-col items-center gap-5 bg-[#f3eee7] rounded-[20px]">
              <img className="rounded-t-[20px]" style={{height:"350px" ,width:"100%"}}
                src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533"
                alt="product"
              />
              <Link className="flex " to={"/"}>
                <Text className="text-center font-[600]">Azur Lane | 6th Anniversary Limited Commemorat...</Text>
              </Link>
              <Text className="font-[450]">2.288.000₫</Text>
              <button className="py-2.5 mb-3 text-[#c5ac95] text-[17px] rounded-[20px] w-[90%] bg-white font-[450] border-[1.5px] border-[#c5ac95]">Add to cart</button>
            </div>
          </Col>
        </Row>
        <div className="mt-10 flex justify-center">
        <Pagination defaultCurrent={1} total={50} onChange={onChange}/>
        </div>
      </div>
    </div>
  );
}
