const Search = () => {
    return ( 
        <form action={"/"} className="pt-14">
        <div style={{position:"relative"}} className="w-fit">
            <input 
                className="w-80 h-12 border-2 border-blue-950 p-3 text-sm" type="text" 
                placeholder="Find a store in your area!"
            />
            <button>
                <img 
                    style={{position:"absolute", right:"10px", bottom:"20%"}}
                    className="w-7 h-fit"
                    src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/search-ico.png" alt="" />
            </button>
        </div>
        </form>
    );
}
 
export default Search;