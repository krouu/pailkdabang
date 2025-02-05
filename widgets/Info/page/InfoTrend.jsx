
import { constants } from "../data/constants";
import MainTitle from "../ui/MainTitle";
import TrendImg from "../ui/TrendImg";
import TrendText from "../ui/TrendText";

const InfoTrend = () => {
    return (  
        <article className="w-full py-24">
            <MainTitle title={"발 빠른 트렌드 리딩"} />
            <div className="flex flex-col pt-14">
                <div className="flex pb-28">
                    <TrendText {...constants.trendCard.text1} />
                    <TrendImg {...constants.trendCard.img1} />
                </div>
                <div className="flex">
                    <TrendImg {...constants.trendCard.img2} />
                    <TrendText {...constants.trendCard.text2} />
                </div>
            </div>
        </article>
    );
}
 
export default InfoTrend;