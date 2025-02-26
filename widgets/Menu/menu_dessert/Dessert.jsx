import { constants } from "../data/constants";
import Banner from "../ui/Banner";
import MenuCard from "../ui/MenuCard";
import Title from "../ui/Title";

const Dessert = () => {
    return (  
        <section className="w-screen">
            <Banner {...constants.banner.dessert} />
            <article className="w-full max-w-screen-xl m-auto py-10">
                <Title title={"DESSERT"} />
                <div className="grid grid-cols-4 gap-6">
                    {constants.Dessert.map((v,i)=> (
                        <MenuCard key={i} {...v} />
                    ))}
                </div>
            </article>
        </section>
    );
}
 
export default Dessert;