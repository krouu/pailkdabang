import TheBornLogo from "@/share/logo/TheBornLogo";
import { constants } from "./data/constants";

const Footer = () => {
    return (  
        <footer className="w-screen py-7  border-t-2 border-yellow-300 mt-5">
            <section className="w-full max-w-screen-lg m-auto flex flex-col gap-8 items-center text-center text-xs">
                <TheBornLogo />
                <div className="flex flex-col items-center gap-1">
                    <p className="font-extrabold">개인정보처리방침</p>
                    <div className="flex gap-4">
                        {constants.firstInfo.map((v,i)=>(
                            <span key={i}>{v}</span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {constants.secondInfo.map((v,i)=>(
                            <span key={i}>{v}</span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {constants.thirdInfo.map((v,i)=>(
                            <span key={i}>{v}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-slate-600">COPYRIGHTⓒ 2018 THEBORN KOREA INC. ALL RIGHTS RESERVED</p>
                </div>
            </section>
        </footer>
    );
}
 
export default Footer;