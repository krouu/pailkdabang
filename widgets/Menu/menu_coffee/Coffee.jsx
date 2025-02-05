import { constants } from "../data/constants";
import Banner from "../ui/Banner";

const Coffee = () => {
    return (  
        <section className="w-screen">
            <Banner {...constants.banner.coffee} />
        </section>
    );
}
 
export default Coffee;