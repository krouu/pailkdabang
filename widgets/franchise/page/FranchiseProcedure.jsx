import { constants } from "../data/constants";
import FranchiseTitle from "../ui/FranchiseTitle";
import Procedure from "../ui/Procedure";

const FranchiseProcedure = () => {
    return (  
        <article className="w-full max-w-screen-xl m-auto py-12 border-b border-gray-200">
            <FranchiseTitle {... constants.title.first} />
            <div className="grid grid-cols-5 gap-4 pb-4">
                {constants.procedure.map((v,i)=>(
                    <Procedure key={i} {...v} />
                ))}
            </div>
            <div className="border border-blue-900 h-fit p-7">
                <p className="text-blue-900 text-sm">
                    본사 점검팀 순회를 통해 주기적인 매장 점검<br />
                    * 가맹 계약 후 최소 60일~90일 이후 오픈<br />
                    * 홈페이지 내 창업문의를 통해 본사와 상담 후 참석 및 가맹지원서 작성/제출하여야만 창업 진행 가능<br />
                    * 타겟 고객층에 적합한 입지를 선정/통보하여 본부의 승인을 받고 임대차/가맹 계약을 체결하여야 하며, 점주 본인이 반드시 교육을 이수해야 함
                </p>
            </div>
        </article>
    );
}
 
export default FranchiseProcedure;