import { constants } from "../data/constants";
import Banner from "../ui/Banner";
import Title from "../ui/Title";
import MenuCard from "../ui/MenuCard";

const Coffee = () => {
    return (  
        <section className="w-screen">
            <Banner {...constants.banner.coffee} />
            <article className="w-full max-w-screen-xl m-auto py-10">
                <Title title={"COFFEE"} />
                <div className="grid grid-cols-4 gap-6">
                    {constants.Coffee.map((v,i)=> (
                        <MenuCard key={i} {...v} />
                    ))}
                </div>
            </article>
        </section>
    );
}
 
export default Coffee;