import Link from "next/link";
import Banner from "./ui/Banner";
import { constants } from "./data/constants";
import { CommonConstants } from "@/share/data/CommonConstants";
import Title from "./ui/Title";
import MenuCard from "./ui/MenuCard";

const Menu = () => {
    return (  
        <section className="w-screen">
            <Banner {...constants.banner.new} />
            <article className="w-full max-w-screen-xl m-auto py-10">
                <Title title={"신메뉴"} />
                {constants.Menu.map((v,i)=> (
                    <MenuCard key={i} {...v} />
                ))}
            </article>
        </section>
    );
}
 
export default Menu;