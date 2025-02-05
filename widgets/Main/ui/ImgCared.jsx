import PlusButton from "@/share/btn/PlusButton";
import Link from "next/link";

const ImgCard = ({href, width, postion, imgSrc, title1, title2, title3, text1, text2, titleColor, textColor}) => {
    return (  
        <article>
            <div style={{position:"relative"}} className={`${width} h-auto overflow-hidden`}>
                <img className="w-full hover:scale-110 transition-transform ease-in-out duration-700" 
                     src={imgSrc} alt="" />
                <div style={{position:"absolute", top:"0px"}} className={`${postion}`}>
                    <p className={`font-black ${titleColor} text-5xl pb-5`}>{title1}<br/>{title2}<br/>{title3}</p>
                    <div className="w-11 border-b-2 border-slate-900" />
                    <p className={`font-black ${textColor} py-5`}>{text1}<br/>{text2}</p>
                </div>
                <Link href={`${href}`} style={{position:"absolute", bottom:"0px"}} className={`${postion}`}>
                    <PlusButton />
                </Link>
            </div>
        </article>
    );
}
 
export default ImgCard;