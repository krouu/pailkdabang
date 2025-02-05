import ChapterTitle from "./ChapterTitle";

const TrendText = ({engTitle, korTitle, KorTitle2, text1, text2, pointText, text3}) => {
    return (
        <div className="w-1/2 text-lg">
            <ChapterTitle EngTitle={`${engTitle}`} KorTitle={`${korTitle}`} KorTitle2={`${KorTitle2}`} />
            <p>{text1}<br /> {text2}<br />
            <em 
                style={{fontStyle:"normal"}}
                className="font-semibold">{pointText}
            </em>
            {text3}
            </p>
        </div>
    )
};
 
export default TrendText
;