"use client"
import Search from "./Search";

const EtcCard = ({title, text, searchBool, backImgBool}) => {
    
    return (  
        <div 
            style={{
                width:"500px", height:"300px",
            }} 
            className="text-blue-950 border-2 border-blue-950 p-10"
        >
            <p className="text-4xl font-black mb-2">{title}</p>
            <p className=" font-extrabold">{text}</p>
            {searchBool === true ? <Search /> : null}
        </div>
    );
}
 
export default EtcCard;