import { constants } from "../data/constants";
import EtcCard from "./EtcCard";
import MainCard from "./MainCard";

const MainBanner = () => {
    return ( 
        <article>
            <article className="flex">
                {constants.firstBanner.map((v,i)=> (
                    <MainCard key={i} {...v} />
                ))}
            </article>

            {constants.secondBanner.map((v,i)=>(
                <MainCard key={i} {...v} />
            ))}

            <article className="flex">
                {constants.thirdBanner.map((v,i)=>(
                    <MainCard key={i} {...v} />
                ))}
            </article>

            <article className="flex gap-4 pt-8 pl-96">
                    <div style={{position:"relative"}} className="flex flex-col gap-4">
                        {constants.etcBanner.map((v,i)=>(
                            <EtcCard key={i} {...v}/>
                        ))}
                    </div>
                    {constants.fourBanner.map((v,i)=>(
                        <MainCard key={i} {...v} />
                    ))}
            </article>
        </article>
    );
}
 
export default MainBanner;