import Link from "next/link";
import { constants } from "../data/constants";
import BoxContent from "../ui/BoxContent";
import FranchiseTitle from "../ui/FranchiseTitle";

const FranchiseInquiry = () => {
    return (  
        <article className="w-full max-w-screen-xl m-auto py-12 ">
            <FranchiseTitle {...constants.title.third} />
            <div className="w-full bg-gray-50 py-10 px-11 flex flex-col items-center justify-center text-center">
                <div className="w-full m-auto flex gap-5 justify-center items-center py-7 border-b border-gray-400">
                    <img className="w-10" src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/warning-ico.png" alt="" />
                    <p>빽다방 창업 문의 시, 아래 사항을 꼭 기재해 주세요. 정확하고 빠른 창업 상담을 위해 꼭 필요한 정보입니다.</p>
                </div>
                <div className="grid grid-cols-5 gap-6 py-12">
                    {constants.boxContent.map((v,i)=> (
                        <BoxContent key={i} {...v} />
                    ))}
                </div>
                <div>
                    <Link href={"https://start.theborn.co.kr/inquiry.php"}>
                        <button 
                            style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
                            className="py-4 px-20 bg-yellow-300"
                        >
                            더본코리아에 창업문의 바로가기
                        </button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
 
export default FranchiseInquiry;