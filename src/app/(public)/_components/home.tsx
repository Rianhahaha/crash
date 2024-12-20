
import Link from "next/link";
import Image from "next/image";
export default function Home() {

    return (
        <>

            <section
                className="h-screen w-full overflow-hidden relative bg-[url('/assets/bg.png')] bg-cover bg-center"
            >
                <Image width={100} height={100} src="/assets/art.gif" className="w-[60rem] bottom-0 left-0 absolute " alt="" />
                <Image width={300} height={300} src="/assets/title.png" className="w-[30rem] top-[5%] right-[10%] absolute " alt="" />
                <div className="absolute bottom-[30%] right-[16%]  flex gap-5">
                    <Link href={'#'}>
                        <Image width={100} height={100} className="w-hover:animate-shake" src="/assets/Page1/PILL.png" alt="" />
                    </Link>
                    <Link href={'#'}>
                        <Image width={100} height={100} className="w-hover:animate-shake" src="/assets/Page1/X.png" alt="" />
                    </Link>
                </div>

            </section>
        </>
    );
}
