import ChapterTitle from "../ui/ChapterTitle";
import MainTitle from "../ui/MainTitle";

const InfoIdentifier = () => {
    return (  
        <article>
            <MainTitle title={"BRAND IDENTIFIER"} />
               
            <div className="w-full py-9 text-center">
                <ChapterTitle EngTitle={"PRIMARY IDENTIFIER"} KorTitle={"빽다방 브랜드 규정"} />
                <div className="text-center">
                    <div className="text-lg text-slate-600">
                        <p>빽다방 Identifier는 빽다방을 대표하는 중요한 상징요소로, 심볼마크와 로고타입의 조합을 의미합니다.</p>
                        <div className="pt-3">
                            <p>빽다방의 시간 아이덴티티 구축은 정확한 Identifier 규정에 따라야 하며</p>
                            <p>어떠한 경우에도 훼손, 변형 등의 이미지 손상을 가해서는 안됩니다.</p>
                        </div>
                    </div>
                    <div 
                        style={{
                            backgroundImage:"url('https://paikdabang.com/wp-content/themes/paikdabang/assets/images/intro/check_bg.gif')",
                            backgroundSize : "cover"
                        }}
                        className="border border-slate-200 mt-20"
                    >
                        <img className="m-auto py-16" src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/intro/standard_logo.png" alt="" />
                    </div>
                    <div className="flex gap-20 items-center justify-center py-16 border-b border-slate-300">
                        <img src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/intro/paiks_logo01.jpg" alt="" />
                        <img src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/intro/paiks_logo02.jpg" alt="" />
                        <img src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/intro/paiks_logo02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </article>
    );
}
 
export default InfoIdentifier;