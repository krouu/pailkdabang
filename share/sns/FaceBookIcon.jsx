import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const FaceBookIcon = ({size}) => {
    return (
        <Link href={"https://ko-kr.facebook.com/ipaikscoffee/"}>
            <FaFacebookSquare color="#0d4f75" size={size} />
        </Link>
    );
}
 
export default FaceBookIcon;