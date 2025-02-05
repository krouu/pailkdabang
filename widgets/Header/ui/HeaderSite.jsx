import FaceBookIcon from "@/share/sns/FaceBookIcon";
import InstargramIcon from "@/share/sns/InstagramIcon";
import Link from "next/link";

const HeaderSite = () => {
    return (  
        <div style={{position:"absolute", right:"15px", top:"2px"}} className="flex gap-2 items-center justify-center text-xs text-slate-500">
            <Link href={"https://www.theborn.co.kr/"}>
                <span>더본코리아</span>
            </Link>
            <span>|</span>
            <FaceBookIcon size={"20px"} />
            <InstargramIcon size={"20px"} />
        </div>
    );
}
 
export default HeaderSite;