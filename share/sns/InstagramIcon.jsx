import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";

const InstargramIcon = ({size}) => {
    return (
    <Link href={"https://www.instagram.com/paikscoffee_official/"}>
        <FaSquareInstagram color="#0d4f75" size={size} />
    </Link>

    );
}
 
export default InstargramIcon;