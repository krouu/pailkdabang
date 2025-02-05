import MainSwiper from "@/swiper/MainSwiper";
import MainBanner from "./ui/MainBanner";
import MainSNS from "./ui/MainSNS";

const MainPage = () => {
    return (
        <section className="w-screen">
            <MainSwiper /> 
            <MainBanner />
            <MainSNS />
       </section>
    );
}
 
export default MainPage;