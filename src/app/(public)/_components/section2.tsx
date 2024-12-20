import React from "react";

export default function Section2() {
    return (
        <>
            <section className="h-screen w-full relative" style={{ backgroundImage: "url('/assets/home/bg.png')", backgroundSize: "cover" }}>
                <div className="flex flex-col items-center justify-center">
                    <img className="mb-4" src="/assets/section2/about.png" alt="" />
                    <div className="text-center w-full text-[5rem] leading-[5rem]">
                        XYZ IS ABOUT VIBES. <br />
                        (wtf you expected more?) <br />
                        HELL NAH!
                    </div>

                </div>
                <img className="absolute bottom-0 left-0 w-[30rem]" src="/assets/section2/WIF.png" alt="" />
                <img className="absolute top-0 right-0" src="/assets/c2.png" alt="" />

            </section>
        </>
    );
}   