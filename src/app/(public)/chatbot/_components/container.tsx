'use client';

import { generateUUID } from '@/utils/string';
import { useEffect, useState } from 'react';
import { getModelId } from './actions';
import { Chat } from './chat';
import Image from 'next/image'

export default function ChatbotContainer() {
    const id = generateUUID();

    const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

    useEffect(() => {
        const fetchModelId = async () => {
            const modelId = await getModelId();
            setSelectedModelId(modelId);
        };
        fetchModelId();
    }, []);

    if (!selectedModelId) {
        return <></>;
    }

    return (
        <section className="h-full max-h-screen w-full overflow-hidden">
            <div className="flex h-full w-full ">
                <div className="relative w-1/2 h-screen">
                    <div className="w-full h-full brightness-50">
                        <video src="/assets/chatbot/chatbot.mp4" autoPlay muted loop className="h-full w-full object-cover" />
                    </div>

                    <div className='absolute top-0 right-0 h-screen left-0'>
                        <div className='flex flex-col h-full w-full justify-center items-center'>
                            <Image src={'/assets/chatbot/chatbot-logo.svg'} width={325} height={325} alt='' />
                        </div>
                    </div>
                    <div className='flex items-center gap-4 absolute left-4 top-4'>
                        <Image src={'/assets/chatbot/chatbot-logo.svg'} width={480} height={480} alt='' className='w-12 h-12' />
                        <p className='text-white text-2xl font-normal'>Lumi v1.0</p>
                    </div>
                </div>


                <div className="w-1/2">
                    <Chat key={id} id={id} initialMessages={[]} selectedModelId={selectedModelId} />
                </div>
            </div>
        </section>
    );
}
