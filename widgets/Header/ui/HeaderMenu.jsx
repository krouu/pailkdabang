import Link from "next/link";

const HeaderMenu = () => {
    return (  
        <ul style={{position:"absolute", left:"300px",bottom:"2px"}} className="flex gap-16 text-sm">
            <Link href={"/info"}>
                <li>빽다방</li>
            </Link>
            <Link href={"/menu"}>
                <li>메뉴</li>
            </Link>
            <Link href={"/franchise"}>
                <li>창업절차</li>
            </Link>
        </ul>
    );
}
 
export default HeaderMenu;