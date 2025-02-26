import { CommonConstants } from "@/share/data/CommonConstants";

const Title = ({title}) => {
    return (  
        <div style={{color:CommonConstants.color.blue}} className="flex flex-col justify-center items-center py-10">
            <h1 className="text-4xl font-black py-4">{title}</h1>
            <div className="border-b-2 border-blue-900 w-14"/>
        </div>
    );
}
 
export default Title;