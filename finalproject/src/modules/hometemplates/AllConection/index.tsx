import { Col, Pagination, PaginationProps, Row } from "antd";
import { Link } from "react-router-dom";


export default function AllConection() {
    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
      };
  return (
    <div className="container mx-auto py-10">
        <Row gutter={[50,50]}>
        <Col span={6} >
        <div className="bg-white rounded-[15px]">
        <img className="rounded-t-[15px]" style={{width:"100%"}} src="./img/conection1.jpg" alt="conection1" />
        <Link to="/" className="flex items-center gap-3 p-3 py-5">
        <span className="text-md font-[500]">Azur Lane x USS Hornet Museum Collab Merch Collection </span>
        <svg
            viewBox="0 0 14 10"
            fill="none"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            style={{ width: "1.5rem"}}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        </div>
        </Col>
    </Row>
    <div className="flex justify-center py-5 mt-5">
    <Pagination onChange={onChange} defaultCurrent={1} total={50} />
    </div>
    </div>
  )
}
