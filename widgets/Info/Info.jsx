import InfoIdentifier from "./page/InfoIdentifier";
import InfoColor from "./page/InfoColor";
import InfoPoint from "./page/InfoPoint";
import InfoTrend from "./page/InfoTrend";

const Info = () => {
    return ( 
        <article className="w-screen">
            <div className="w-full max-w-screen-xl m-auto flex flex-col items-center py-12">
                <InfoIdentifier />
                <InfoColor />
                <InfoPoint />
                <InfoTrend />
            </div>
        </article>
    );
}
 
export default Info;