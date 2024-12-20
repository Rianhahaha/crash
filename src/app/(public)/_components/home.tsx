
import Link from "next/link";
import Image from "next/image";
export default function Home() {

    return (
        <>

            <section
                className="h-screen w-full overflow-hidden relative bg-[url('/assets/bg.png')] bg-cover bg-center"
            >

                <Image width={100} height={100} src="/assets/art.gif" className="w-[80%] bottom-0 left-0 absolute " alt="" />
                <div className="absolute bottom-[20%] right-[16%]  ">
                    <Image width={500} height={500} src="/assets/title.png" className="w-[30rem]  right-[10%]  " alt="" />
                    <div className="ml-[55px] flex gap-5 justify-center">
                        <Link href={'https://pump.fun/98zrit1u5KyYnWyXxskSaUNUTsP8Zpru947BCFyupump'} className="" target="_blank">
                            <Image width={100} height={100} className="hover:animate-shake" src="/assets/Page1/PILL.png" alt="" />
                        </Link>
                        <Link href={'https://x.com/DIP_ITSOVER'} target="_blank">
                            <Image width={100} height={100} className="hover:animate-shake" src="/assets/Page1/X.png" alt="" />
                        </Link>
                    </div>
                    <div className=" ml-[55px] flex gap-5 justify-center text-white text-[1.5rem] mt-[2rem]" >
                        BLOODY MARKET? LET’S RIDE IT
                    </div>
                </div>


            </section>
        </>
    );
}
