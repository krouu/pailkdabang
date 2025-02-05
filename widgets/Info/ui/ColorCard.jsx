const ColorCard = ({color, colorName, CMYK, RGB, colorCode}) => {
    return (  
        <div className="w-1/3 h-fit p-10 border border-slate-300">
            <div 
                style={{backgroundColor:`${color}`}} 
                className="w-full h-12 mb-5"
            />
            <p 
                style={{color:`${color}`}}
                className="font-black text-2xl mb-5"
            >
                {colorName}
            </p>
            <div className="text-lg text-slate-500">
                <p>CMYK : {CMYK}</p>
                <p>RGB : {RGB}</p>
                <p>{colorCode}</p>
            </div>
        </div>
    );
}
 
export default ColorCard;