import PlusButton from "@/share/btn/PlusButton";
import Link from "next/link";

const MainCard = ({href, width, postion, imgSrc, title1, title2, title3, text1, text2, imgSize, imgPostion, backColor, titleColor, textColor}) => {
    return (  
            <Link href={`${href}`} className={`${width}`}>
                <div 
                    style={{
                        backgroundImage:`url(${imgSrc})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:`${imgSize}`,
                        backgroundPosition:`${imgPostion}`,
                        backgroundColor:`${backColor}`,
                    }}
                >
                    <div className={`${postion}`}>
                        <p className={`font-black ${titleColor} text-5xl pb-5 x`}>{title1}<br/>{title2}<br />{title3}</p>
                        <p className={`font-black ${textColor} pb-8`}>{text1}<br/>{text2}</p>
                        <PlusButton />
                    </div>
                </div>
            </Link>
    );
}
 
export default MainCard;