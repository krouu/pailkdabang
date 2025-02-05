import FaceBookIcon from "@/share/sns/FaceBookIcon";
import InstargramIcon from "@/share/sns/InstagramIcon";
import "../../../app/index.css"

const MainSNS = () => {
    return (  
        <article className="w-full max-w-screen-xl m-auto flex flex-col gap-3 text-center items-center pt-10">
            <p className="EnglisTitleFont text-2xl">PAIK'S COFFEE SNS</p>
            <ul className="flex gap-3">
                <li>#빽다방</li>
                <li>#빽다방신메뉴</li>
                <li>#빽다방이벤트</li>
            </ul>
            <div className="border-t-2 border-blue-950 w-11 m-4"></div>
            <div className="flex gap-2 mb-12">
                <FaceBookIcon size={"35px"} />
                <InstargramIcon size={"35px"} />
            </div>
        </article>
    );
}
 
export default MainSNS;