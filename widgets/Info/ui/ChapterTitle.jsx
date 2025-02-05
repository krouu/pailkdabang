import { CommonConstants } from "@/share/data/CommonConstants";

const ChapterTitle = ({EngTitle, KorTitle, KorTitle2}) => {
    return (  
        <article className="font-black pb-7">
            <p 
                style={{color:`${CommonConstants.color.blue}`}}
                className="text-xl tracking-widest pt-11"
            >
                {EngTitle}
            </p>
            <p 
                style={{color:`${CommonConstants.color.black}`}}
                className="text-3xl tracking-tighter pt-2"
            >
                {KorTitle}<br />
                {KorTitle2}
            </p>
        </article>
    );
}
 
export default ChapterTitle;