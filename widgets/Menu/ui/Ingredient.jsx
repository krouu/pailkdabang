const Ingredient = ({caffeine, kcal, sodium, sugar, saturated, protein}) => {
    return (  
        <div className="w-full border-y-2 border-black">
            <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between">
                    <p>카페인(mg)</p>
                    <p>{caffeine}</p>
                </div>
                <div className="flex justify-between">
                    <p>칼로리</p>
                    <p>{kcal}</p>
                </div>
                <div className="flex justify-between">
                    <p>나트륨</p>
                    <p>{sodium}</p>
                </div>
                <div className="flex justify-between">
                    <p>당류</p>
                    <p>{sugar}</p>
                </div>
                <div className="flex justify-between">
                    <p>포화지방</p>
                    <p>{saturated}</p>
                </div>
                <div className="flex justify-between">
                    <p>단백질</p>
                    <p>{protein}</p>
                </div>  
            </div>
        </div>
    );
}
 
export default Ingredient;