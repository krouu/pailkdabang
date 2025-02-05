import { constants } from "../data/constants";
import FranchiseTitle from "../ui/FranchiseTitle";
import Table from "../ui/Table";

const FranchiseCondition = () => {
    return (  
        <article className="w-full max-w-screen-xl m-auto py-12 border-b border-gray-200">
            <FranchiseTitle {...constants.title.second} />
            <Table />
        </article>
    );
}
 
export default FranchiseCondition;