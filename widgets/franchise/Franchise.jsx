import { CommonConstants } from "@/share/data/CommonConstants";
import { constants } from "./data/constants";
import FranchiseProcedure from "./page/FranchiseProcedure";
import FranchiseTitle from "./ui/FranchiseTitle";
import TableTr from "./ui/TableTr";
import Table from "./ui/Table";
import FranchiseCondition from "./page/FranchiseCondition";
import BoxContent from "./ui/BoxContent";
import FranchiseInquiry from "./page/FranchiseInquiry";

const Franchise = () => {
    return (  
        <section className="w-screen">
            <FranchiseProcedure />
            <FranchiseCondition />
            <FranchiseInquiry />
        </section>
    );
}
 
export default Franchise;