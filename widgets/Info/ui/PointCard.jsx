import { CommonConstants } from "@/share/data/CommonConstants";


const PointCard = ({url,title, text1, text2, strongText, text3}) => {

    return <div className="flex py-16 gap-7 items-center">
                <div 
                    style={{
                        backgroundImage:`url(${url})`,
                        backgroundRepeat :"no-repeat",
                        backgroundPosition:"50%"
                    }}
                    className="w-60 h-60 rounded-full bg-white">
                </div>
                <div>
                    <p style={{color:CommonConstants.color.blue}} className="font-black text-2xl pb-3">{title}</p>
                    <div className="text-xl text-slate-600">
                        <p>{text1}<br/>
                        {text2}<br />
                        <em 
                            style={{
                                color:CommonConstants.color.black,
                                fontStyle:"normal",
                                boxShadow:"inset 0 -10px 0 #ffe417"
                            }}
                            className="font-bold"
                        >{strongText}</em>
                        {text3}</p>
                    </div>
                </div>
            </div>
}
 
export default PointCard;