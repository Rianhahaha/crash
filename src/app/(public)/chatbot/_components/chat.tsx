'use client';

import { Message as PreviewMessage } from '@/app/(public)/chatbot/_components/message';
import type { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MultimodalInput } from './multimodal-input';

export function Chat({ id, initialMessages, selectedModelId }: { id: string; initialMessages: Message[]; selectedModelId: string }) {
    const { messages, setMessages, handleSubmit, input, setInput, append, isLoading, stop } = useChat({
        body: { id, modelId: selectedModelId },
        initialMessages,
    });

    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        const container = chatContainerRef.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatContainerRef]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const visibleMessages = messages;

    return (
        <div className="relative h-screen w-full overflow-hidden font-mulish">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative mx-auto flex h-full w-full flex-col">
                        <Link href="/" className={`absolute right-[20px] top-[20px] cursor-pointer`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </Link>
                        <div ref={chatContainerRef} className="scrollbar-hide flex-1 overflow-y-auto bg-[#1A141D] p-4 pt-[60px] shadow-xl">
                            <PreviewMessage
                                key={''}
                                role={'assistant'}
                                content={`Welcome!
I’m Lumi, your curious guide from the digital cosmos, here to light up your path with wisdom, exploration, and endless possibilities! With my glowing antennas and an eye for discovery, I’ll help you uncover the brilliance hidden within yourself.

In this space, every question is a spark waiting to ignite, and every step is a journey worth taking. Whether you’re here to learn, create, or simply explore, I’m your cheerful companion, ready to turn every moment into a shining revelation.

So, are you ready to take that first step and let your curiosity shine? Let’s illuminate something amazing together!`}
                                attachments={[]}
                                toolInvocations={[]}
                            />
                            {visibleMessages.map((message) => (
                                <PreviewMessage
                                    key={message.id}
                                    role={message.role}
                                    content={message.content}
                                    attachments={message.experimental_attachments}
                                    toolInvocations={message.toolInvocations}
                                />
                            ))}
                        </div>

                        <div className="w-full bg-[#2B242F] px-[20px] py-[18px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.10)]">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                                <MultimodalInput
                                    className="text-white bg-[#FFFFFF08] border-none"
                                    input={input}
                                    setInput={setInput}
                                    handleSubmit={handleSubmit}
                                    isLoading={isLoading}
                                    stop={stop}
                                    attachments={attachments}
                                    setAttachments={setAttachments}
                                    messages={messages}
                                    setMessages={setMessages}
                                    append={append}
                                />
                                <button type="submit">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24.541" cy="24.541" r="24.541" transform="rotate(-90 24.541 24.541)" fill="url(#paint0_linear_9_704)" />
                                        <path d="M23.0482 16.2243L15.8257 28.8783C15.7061 29.0916 15.6541 29.3362 15.6768 29.5797C15.6995 29.8232 15.7958 30.0541 15.9528 30.2416C16.1098 30.4291 16.3202 30.5644 16.5559 30.6295C16.7917 30.6946 17.0416 30.6865 17.2726 30.6061L24.0869 28.2712C24.0894 28.2715 24.092 28.2715 24.0945 28.2712C24.097 28.2716 24.0995 28.2716 24.102 28.2712L30.9314 30.6061C31.1131 30.6705 31.3076 30.6903 31.4985 30.6639C31.6895 30.6375 31.8713 30.5657 32.0288 30.4545C32.1862 30.3433 32.3147 30.196 32.4034 30.0248C32.4922 29.8537 32.5386 29.6638 32.5387 29.471C32.5382 29.2619 32.4837 29.0564 32.3805 28.8745L25.1459 16.2273C25.0414 16.0408 24.8892 15.8854 24.7048 15.7771C24.5204 15.6688 24.3105 15.6116 24.0967 15.6112C23.8829 15.6108 23.6728 15.6673 23.488 15.7749C23.3032 15.8825 23.1504 16.0374 23.0452 16.2236L23.0482 16.2243ZM31.3336 29.471L31.3268 29.471L24.7053 27.2009L24.7053 22.8428C24.7053 22.683 24.6418 22.5297 24.5288 22.4167C24.4158 22.3037 24.2626 22.2402 24.1027 22.2402C23.9429 22.2402 23.7897 22.3037 23.6767 22.4167C23.5637 22.5297 23.5002 22.683 23.5002 22.8428L23.5002 27.1948L16.881 29.4665L16.8719 29.471L24.0899 16.8171L31.3336 29.471Z" fill="black" />
                                        <defs>
                                            <linearGradient id="paint0_linear_9_704" x1="-1.90735e-06" y1="24.541" x2="49.082" y2="24.541" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#C656FF" />
                                                <stop offset="1" stop-color="#FADE6E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
