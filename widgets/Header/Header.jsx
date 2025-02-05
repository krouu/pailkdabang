import Logo from "@/share/logo/Logo";
import HeaderMenu from "./ui/HeaderMenu";
import HeaderSite from "./ui/HeaderSite";

const Header = () => {
    return (  
        <>
        <header style={{position:"fixed", zIndex:"9999"}} className="w-screen py-8 bg-white">
            <section style={{position:"relative"}} className="w-full max-w-screen-xl m-auto flex">
                <Logo />
                <HeaderMenu />
                <HeaderSite />
            </section>
        </header>
        <section className="pt-36" />
        </>
    );
}
 
export default Header;