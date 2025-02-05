import { CommonConstants } from "@/share/data/CommonConstants";

const FranchiseTitle = ({title, comment}) => {
    return (  
        <div>
            <h1 style={{color:CommonConstants.color.blue}} className="text-3xl font-black pb-6">{title}</h1>
            <div className="border-b-2 border-slate-600 w-10"/>
            <h6 className="font-semibold text-slate-400 py-6">{comment}</h6>
        </div>
    );
}
 
export default FranchiseTitle;