const TrendImg = ({imgSrc}) => {
    return (  
        <div className="w-1/2">
            <img 
                style={{boxShadow : "15px 15px 0 rgb(240, 240, 240)"}}
                className="border-4 border-yellow-300"
                src={imgSrc} alt="" />
        </div>
    );
}
 
export default TrendImg;