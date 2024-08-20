import { Link } from "react-router-dom";


export default function Announcement
() {
  return (
    <div className="w-1/2 mx-auto">
        <h2 className="font-bold text-xl py-5 ">ANNOUNCEMENT</h2>
      <Link to={"/announcement/1"}>
      <img className="w-full h-[200px] rounded-[15px] mb-10" src="./img/anount1.png" alt="anh1" />
      </Link>
      <Link to={"/announcement/2"}>
      <img className="w-full h-[200px] mb-10 rounded-[15px]" src="./img/anount2.jpg" alt="anh1" />
      </Link>
      <Link to={"/announcement/3"}>
      <img className="w-full h-[200px] mb-10 rounded-[15px]" src="./img/anount3.jpg" alt="anh1" />
      </Link>
      <Link to={"/announcement/4"}>
      <img className="w-full h-[200px]  rounded-[15px] mb-10" src="./img/anount4.jpg" alt="anh1" />
      </Link>
    </div>
  )
}
