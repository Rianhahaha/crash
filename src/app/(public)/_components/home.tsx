
import Link from "next/link";

export default function Home() {

    return (
        <>

            <section
                className="h-screen w-full overflow-hidden relative"
                style={{
                    backgroundImage: "url('./assets/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <img src="./assets/art.gif" className="bottom-0 left-0 absolute " alt="" />
                <img src="./assets/title.png" className="top-[5%] right-[10%] absolute " alt="" />
                <div className="absolute bottom-[30%] right-[16%]  flex gap-5">
                    <Link href={'#'}>
                        <img className="hover:animate-shake" src="./assets/Page1/PILL.png" alt="" />
                    </Link>
                    <Link href={'#'}>
                        <img className="hover:animate-shake" src="./assets/Page1/X.png" alt="" />
                    </Link>
                </div>

            </section>
        </>
    );
}
