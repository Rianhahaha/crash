import React from "react";
import Link from "next/link";

export default function Section1() {
    return (
        <>
            <section className="h-screen w-full relative" style={{ backgroundImage: "url('/assets/home/bg.png')", backgroundSize: "cover" }}>
                <img className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem]" src="/assets/home/1.png" alt="" />
                <img className="absolute top-0" src="/assets/c2.png" alt="" />
                <img className="absolute top-0 right-[20%]" src="/assets/home/sun.png" alt="" />
                <img className="absolute top-0 right-0" src="/assets/c1.png" alt="" />
                <img className="absolute bottom-0 w-full" src="/assets/home/butterfly.png" alt="" />

                <div className="absolute bottom-[20%] w-full flex justify-center">
                    <Link href={'https://pump.fun/5Vf7i6c7E5A1Z4zVM8uHqxhmRUMMpAHNrEhjrGZWpump'} target="_blank">
                        <img className="hover:animate-shake" src="/assets/home/PILL.png" alt="" />
                    </Link>
                    <Link href={'https://x.com/xyzfrens'} target="_blank">
                        <img className="hover:animate-shake" src="/assets/home/x.png" alt="" />
                    </Link>
                </div>
            </section>
        </>
    );
}   