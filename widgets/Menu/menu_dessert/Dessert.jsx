import { constants } from "../data/constants";
import Banner from "../ui/Banner";

const Dessert = () => {
    return (  
        <section className="w-screen">
            <Banner {...constants.banner.dessert} />
        </section>
    );
}
 
export default Dessert;