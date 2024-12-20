
import Link from "next/link";
import Image from "next/image";
export default function Home() {

    return (
        <>

            <section
                className="h-screen w-full overflow-hidden relative bg-[url('/assets/bg.png')] bg-cover bg-center"
            >
                <div className="flex flex-col items-center justify-center">
                    <Image width={100} height={100} src="/assets/art.gif" className="w-[80%] bottom-0 left-0 absolute " alt="" />
                    <div className="absolute bottom-[30%] right-[16%]  ">
                        <Image width={500} height={500} src="/assets/title.png" className="w-[30rem]  right-[10%]  " alt="" />
                        <div className="ml-[55px] flex gap-5 justify-center">
                            <Link href={'#'} className="">
                                <Image width={100} height={100} className="hover:animate-shake" src="/assets/Page1/PILL.png" alt="" />
                            </Link>
                            <Link href={'https://x.com/DIP_ITSOVER'}>
                                <Image width={100} height={100} className="hover:animate-shake" src="/assets/Page1/X.png" alt="" />
                            </Link>
                        </div>
                        <div className=" ml-[55px] flex gap-5 justify-center text-white text-[1.5rem] mt-[2rem]" >
                            BLOODY MARKET? LET’S RIDE IT
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
