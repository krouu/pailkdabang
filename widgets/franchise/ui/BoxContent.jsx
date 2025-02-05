const BoxContent = ({number, text1, text2}) => {
    return (  
        <div  
            style={{position:"relative", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
            className="flex flex-col w-full h-24 p-7 bg-white items-center justify-center text-blue-900 font-semibold"
        >
            <p style={{position:"absolute", top:"-25px", left:"5px"}} className="text-5xl font-black">{number}</p>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    );
}
 
export default BoxContent;