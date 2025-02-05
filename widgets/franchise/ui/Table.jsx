import { constants } from "../data/constants";
import TableTr from "./TableTr";

const Table = () => {
    return (  
        <div className="w-full bg-gray-50 p-8">
            <table className="w-full border border-gray-100">
                <tbody>
                    <tr className="border-b-2 border-gray-100">
                        <th className="w-56 py-10 px-4 text-white bg-blue-950">브랜드 컨셉</th>
                        <td className="pl-6 bg-white">
                            <li>좋은 품질의 원두커피를 합리적인 가격으로 판매</li>
                            <li>고품질/합리적인 가격, 고회전</li>
                            <li>젊은 층에 어필할 수 있는 빽다방 고유의 메뉴</li>
                        </td>
                    </tr>
                    {constants.table.map((v,i)=>(
                        <TableTr key={i} {...v} />
                    ))}
                </tbody>
            </table>
            <p className="text-sm text-blue-900 pt-5">*빽다방의 최대 장점은 좋은 품질의 원두커피를 합리적인 가격으로 제공하는 것으로써 전용면적 8평 1층에서 가능함.</p>
        </div>
    );
}
 
export default Table;
