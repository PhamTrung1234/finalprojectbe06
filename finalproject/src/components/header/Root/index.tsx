import { Col } from "antd"
import { NavLink } from "react-router-dom"
import { create } from "zustand"

type NavBarHeader = {
    key:number,
    name:string,
    href:string
}
type State = {
    found:boolean
}
type Action = {
    setFoundModal:(found:State["found"])=>void;
}
const listNavBar :NavBarHeader[]=[
    {key:0,name:"Azur Lane",href:""},
    {key:1,name:"Arknights",href:"/arknights"},
    {key:2,name:"Mahjong Soul",href:"/sahjongsoul"},
    {key:3,name:"All Products",href:"/allproduct"},
    {key:4,name:"All Collections",href:"/allconection"},
    {key:5,name:"Announcement",href:"/announcement"},
]

export const handelNavBar = ()=>{
    
    return listNavBar.map((item:NavBarHeader)=>{
        return (
            <Col key={item.key} className="text-lg text-[#5f5b65] font-[500]">
            <NavLink to={item.href}  className={({ isActive }) => isActive?"active heder__navlink":"heder__navlink"}>{item.name}</NavLink>
            </Col>

        )
    })
}

export const productPersonStore = create<State &Action>((set)=>({
    found:false,
    setFoundModal:(position)=>set(()=>({found:position}))
}))