import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="h-screen w-full relative" style={{ backgroundImage: "url('/assets/footer.png')", backgroundSize: "cover" }}>
                <Link href={'https://pump.fun/5Vf7i6c7E5A1Z4zVM8uHqxhmRUMMpAHNrEhjrGZWpump'} target="_blank">
                    <img className="absolute top-[5%] right-[10%]  hover:animate-shake" src="/assets/buy.png" alt="" />
                </Link>



            </section>
        </>
    );
}   