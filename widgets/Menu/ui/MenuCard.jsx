import Ingredient from "./Ingredient";

const MenuCard = ({imgSrc, title, comment, ingredient}) => {
    return (  
        <div style={{position:"relative"}} className="group flex flex-col justify-center items-center w-80 h-fit py-5 px-4">
            <img className="w-fit" 
                    src={imgSrc} alt="" />
            <p className="font-semibold">{title}</p>
            <div style={{position:"absolute", backgroundColor:"rgba(255, 230, 0, 0.8)"}} className="w-full h-full py-3 px-3 hidden group-hover:flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="font-black text-xl">{title}</h3>
                    <div className="w-7 border-b-2 border-black"/>
                    <p className="text-sm">{comment}</p>
                </div>
                <div className="text-sm">
                    <p>※ 1회 제공량 기준 : 24oz</p>
                    <Ingredient {...ingredient} />
                    <p className="text-xs">(매장 상황에 따라 판매하지 않을 수 있습니다.)</p>
                </div>
            </div>
        </div>
    );
}
 
export default MenuCard;