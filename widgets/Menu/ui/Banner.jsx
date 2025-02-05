import Link from "next/link";

const Banner = ({imgSrc, title, text, newBg, coffeeBg, dessertBg}) => {
    return (  
        <article className="w-full">
            <div style={{
                backgroundImage:`URL('${imgSrc}')`,
                backgroundRepeat:"no-repeat"}}
                className="w-full flex flex-col justify-center items-center"
            >
                <h1 className="text-4xl pt-36 pb-6">{title}</h1>
                <div className="w-10 border-b-2 border-gray-600" />
                <h6 className="text-lg pt-6 pb-28">{text}</h6>
                <div className="pb-7">
                    <Link href={"/menu"} >
                        <button className={`py-2 w-52 ${newBg} border border-slate-300`}>신메뉴</button>
                    </Link>
                    <Link href={"/menu/coffee"} >
                        <button className={`py-2 w-52 border ${coffeeBg} border-slate-300`}>커피</button>
                    </Link>
                    <Link href={"/menu/dessert"} >
                        <button className={`py-2 w-52 border ${dessertBg} border-slate-300`}>아이스크림/디저트</button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
 
export default Banner;