import { SearchOutlined } from "@ant-design/icons";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { handelNavBar, productPersonStore } from "./Root";
import Search from "./Search";

export default function Header() {
  const found = productPersonStore((state) => state.found);
  const setFound = productPersonStore((state) => state.setFoundModal);
  return (
    <div>
      <div className="py-3 bg-[#ffe656]">
        <Link to={"/"} className="flex items-center justify-center">
          <span className="mr-3 font-[500] text-sm">Announcement </span>
          <svg
            viewBox="0 0 14 10"
            fill="none"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            style={{ width: "1.25rem" }}
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
      <div className="container mx-auto">
        {!found && (
          <div>
            <div className="flex justify-between items-center py-7">
              <div>
                <button
                  onClick={() => {
                    setFound(true);
                  }}
                >
                  <SearchOutlined style={{ fontSize: "23px" }} />
                </button>
              </div>
              <Link to={"/"}>
              <img
                width={250}
                src="https://yostar.store/cdn/shop/files/logo_c812fe9d-3714-4539-a7bb-d618deadfb21.png?v=1661853019&width=500"
                alt="logo"
              />
              </Link>
              <div className="flex items-center gap-3">
                <Link to={"/login"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    style={{ width: "1.5rem" }}
                    fill="none"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <Link to={"/"}>
                  <svg
                    style={{ width: "3.25rem" }}
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <Row className="justify-center gap-5">{handelNavBar()}</Row>
          </div>
        )}
        {found && <Search />}
      </div>
    </div>
  );
}
