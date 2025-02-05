const TitleCard = ({borderYN, colorName, titleColor, backColor}) => {
    return (  
        <div>
            <p className="text-xl text-slate-500 pb-1">{colorName}</p>
            <div style={{color:`${titleColor}`, backgroundColor:`${backColor}`}}
                className={`w-full p-3 ${borderYN} font-black text-4xl text-center`}>
                <p>PAIK'S COFFEE</p>
            </div>
        </div>
    );
}
 
export default TitleCard;