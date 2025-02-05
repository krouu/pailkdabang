import { constants } from "../data/constants";
import ChapterTitle from "../ui/ChapterTitle";
import ColorCard from "../ui/ColorCard";
import TitleCard from "../ui/TitleCard";

const InfoColor = () => {
    return <article className="w-full mb-10">
            <div className="text-center">
                <ChapterTitle EngTitle={"BRAND COLOR"} KorTitle={"빽다방 컬러 시스템"} />
            </div>
            <div className="flex gap-5 mb-10">
                {constants.colorCard.map((v,i)=>(
                    <ColorCard key={i} {...v} />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-16">
                {constants.titleCard.map((v,i)=>(
                    <TitleCard key={i} {...v} />
                ))}
            </div>
        </article>
};
 
export default InfoColor;