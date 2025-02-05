import { CommonConstants } from "@/share/data/CommonConstants";

const MainTitle = ({title}) => {
    return (  
        <div className="flex flex-col text-center items-center">
            <p 
                style={{color:`${CommonConstants.color.black}`}}
                className="text-4xl font-black pb-8"
            >
                {title}
            </p>
            <div className="w-14 border-t-2 border-black"/>
        </div>
    );
}
 
export default MainTitle;