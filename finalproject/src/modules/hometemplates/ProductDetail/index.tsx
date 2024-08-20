import {  Col, Image, Row } from "antd";
import { useState } from "react";


export default function ProductDetail() {
    const [quantity,setQty] = useState(1)
  return (
    <div className="container mx-auto py-10">
     <Row gutter={70}>
        <Col span={12}>
        <Row gutter={[30,30]} >
            <Col span={24}>
            <img className="w-full rounded-[15px]" src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533" alt="..." />
            </Col>
            <Col span={12}>
            <Image className="w-full rounded-[15px]" src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533" alt="..." />
            </Col>
            <Col span={12}>
            <Image className="w-full rounded-[15px]" src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533" alt="..." />
            </Col>
            <Col span={12}>
            <Image className="w-full rounded-[15px]" src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533" alt="..." />
            </Col>
            <Col span={12}>
            <Image className="w-full rounded-[15px]" src="https://cdn.shopify.com/s/files/1/0025/7294/3473/files/pre_8d464f32-37d0-490e-9d2e-ca7ad8901649.png?v=1723200256&width=533" alt="..." />
            </Col>
        </Row>
        </Col>
        <Col span={12} className="text-[#5f5b65]">
        <h2 className="text-[45px] mb-5">Azur Lane | 6th Anniversary Limited Commemoration Box</h2>
        <span className="text-lg">RD$ 5,500.00</span>
        <div className="mt-5">
            <span>Quantity</span>
            <div className="mt-3 flex py-2 px-4 justify-between bg-white rounded-[15px] border-[1px] border-[#888888] w-[150px]">
                <button onClick={()=>{setQty(quantity+1)}}>+</button>
                <span>{quantity}</span>
                <button onClick={()=>{if(quantity>1)setQty(quantity-1)}}>-</button>
            </div>
        </div>
        <button className="w-full py-3 mt-5 rounded-[10px] bg-white text-[16px] text-[#c5ad96] border-[1.5px] border-[#c5ad96]">Add to cart</button>
        <h3 className="font-[500] text-[18px] mt-5">Description</h3>
        <p className="my-3 text-[16px]">The 6th Anniversary Limited Commemoration Box combines the wildness of the Old West with the cuteness of shipgirls, creating merch that are both unique collectibles and practical for daily life.</p>
        <p className="text-[16px]">*Estimated time of shipment: From late Sep. 2024</p>
        <p className="my-3 text-[16px]">Box Contents: </p>
        <ul className="text-[16px]">
            <li>- 6th Anniversary Illustration Collection Vol.1</li>
            <li>- 6th Anniversary Illustration Collection Vol.2</li>
            <li>- 6th Anniversary Pin</li>
            <li>- Commemorative Ticket</li>
            <li>- Western Brochure </li>
            <li>- Stainless Steel Flask

</li>
            <li>- Fridge Magnet Set</li>
            <li>- ID Card Holder</li>
            <li>- Table Mat</li>
            <li>- Shawl</li>
        </ul>
        <p className="text-[16px] mt-3 font-[500]">Product Details:</p>
        <p className="text-[16px] mt-3">
            <span className="font-[500]">Size : </span>
            <span>31×21×13cm / 12.2×8.3×5.1in</span>
        </p>
        <p className="text-[16px] mt-3">
            <span className="font-[500]">Material: </span>
            <span>Paper, Polyester</span>
        </p>
        </Col>
     </Row>
    </div>
  )
}
