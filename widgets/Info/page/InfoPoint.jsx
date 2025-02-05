import { constants } from "../data/constants";
import MainTitle from "../ui/MainTitle";
import PointCard from "../ui/PointCard";

const InfoPoint = () => {
    return <article className="w-screen bg-gray-100 py-24">
                <MainTitle title={"빽다방의 핵심가치"} />
                <div className="flex flex-col pl-40">
                    {constants.poinCard.map((v,i)=>(
                        <PointCard key={i} {...v} />
                    ))}
                </div>
            </article>
};
 
export default InfoPoint;