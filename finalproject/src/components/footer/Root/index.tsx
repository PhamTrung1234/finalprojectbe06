import { Option } from "@mui/joy"
import { Col } from "antd"
import { Link } from "react-router-dom"

type ContactItems = {
    key:number,
    value:string,
    href:string
}
type CategoryItems = {
    key:number,
    name:string,
    detail:ContactItems[],
}
type SelectMoney = {
    key:number,
    value:string
}
const listContact :CategoryItems[]=[
    {key:0,name:"Menu",detail:[
        {key:1,value:"Azur Lane",href:""},
        {key:2,value:"Arknights",href:""},
        {key:3,value:"Mahjong Soul",href:""},
        {key:4,value:"All Products",href:""},
        {key:5,value:"All Collections",href:""},
        {key:6,value:"Announcement",href:""},
    ]},
    {key:7,name:"Follow Us",detail:[
        {key:8,value:"Twitter",href:""}
    ]},
    {key:9,name:"Contact Us",detail:[
        {key:10,value:"store.cs@yostar.app",href:""},
        {key:11,value:"About Us",href:""}
    ]},
    {key:12,name:"Policy",detail:[
        {key:13,value:"Terms & Conditions",href:""},
        {key:14,value:"Shipping Policy",href:""},
        {key:15,value:"Exchange and Return",href:""},
        {key:16,value:"VAT Policy",href:""}
    ]},
]

const listMoney : SelectMoney[]=[
    {key:0,value:"Åland Islands - (EUR €)"},
    {key:1,value:"Albania - (ALL L)"},
    {key:2,value:"Andorra - (EUR €)"},
    {key:3,value:"Anguilla - (XCD $)"},
    {key:4,value:"Antigua &amp; Barbuda - (XCD $)"},
    {key:5,value:"Argentina - (USD $)"},
    {key:6,value:"Armenia - (AMD դր.)"},
    {key:7,value:"Aruba - (AWG ƒ)"},
    {key:8,value:"Australia - (AUD $)"},
    {key:9,value:"Austria - (EUR €)"},
    {key:10,value:"Bahamas - (BSD $)"},
    
]

export const handelContact = ()=>{
    return listContact.map((item:CategoryItems)=>{
        return (
            <Col span={4} key={item.key}>
                <h3 className="font-bold text-lg mb-3">{item.name}</h3>
                <ul>
                    {item.detail.map((element:ContactItems)=>{
                        return (
                            <li className="mb-3 text-md font-[450]" key={element.key}>
                                <Link to={element.href}>{element.value}</Link>
                            </li>
                        )
                    })}
                </ul>
            </Col>
        )
    })
}

export const handelSelect = ()=>{
    return listMoney.map((items:SelectMoney)=>{
        return (
            <Option key={items.key} value={items.key}>{items.value}</Option>
        )
    })
}