import { CommonConstants } from "@/share/data/CommonConstants";

const Procedure = ({number, title, comment1, comment2, etcComment1, etcComment2, imgSrc}) => {
    return (  
        <div className="w-full h-72 bg-gray-100 p-4">
            <div className="flex justify-between pb-2 border-b border-slate-700">
                <p style={{color:CommonConstants.color.blue}} className="font-black text-4xl">{number}</p>
                <img src={imgSrc} alt="" />
            </div>
            <h2 style={{color:CommonConstants.color.blue}} className="py-4 font-semibold text-lg">{title}</h2>
            <div className="text-slate-400 text-sm font-semibold pb-4">
                <p>{comment1}</p>
                <p>{comment2}</p>
            </div>
            <div className="text-slate-400 text-sm font-semibold">
                <p>{etcComment1}</p>
                <p>{etcComment2}</p>
            </div>
        </div>
    );
}
 
export default Procedure;