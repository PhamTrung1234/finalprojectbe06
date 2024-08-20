import { useParams } from "react-router-dom"


export default function AnnouncementPages() {
    const {id} = useParams();
    const param = Number(id);
    const handelUIItems = (name:string,src:string)=>{
        return (
            <div className="w-1/2 mx-auto">
                    <h2 className="font-[600] text-xl pt-10">{name}</h2> 
                    <img className=" rounded-[15px] py-10" width={"100%"} src={`.././img/${src}`} alt="..." />
                </div>
        )
    }
    const handelUI = ()=>{
        if(param===1){
            return (
                handelUIItems("Regions of delivery adjustment","anount10.png")
            )
        }else if(param===2){
            return handelUIItems("Latest Shipping Status","anount7.png")
        }else if(param===3){
            return handelUIItems("Holiday Office Closure","anout9.jpg")
        }else if(param===4){
            return handelUIItems("The Delayed Release of Queen's Orders OVA","anout8.jpg")
        }
    }
  return (
    <div >
      {handelUI()}
    </div>
  )
}
