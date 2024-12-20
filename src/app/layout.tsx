import '@/styles/main.css';

import Aos from '@/components/aos';
import MaintenanceMode from '@/components/maintenance-mode';
import { themeConfig } from '@/constants/config';
import type { TLayoutProps } from '@/types/layout';
import { cn } from '@/utils/classname';
import { hexToHsl } from '@/utils/colors';
import { camelToKebab } from '@/utils/string';
import type { Metadata } from 'next';
import { PublicEnvScript } from 'next-runtime-env';
import localFont from 'next/font/local';
import { Analytics, Providers } from './providers';

const fontMain = localFont({
    src: [
        {
            path: '../../public/assets/fonts/ashcanbb_bold.ttf',
        },
    ],
    variable: '--font-main',
});

export async function generateMetadata(): Promise<Metadata> {
    const config = themeConfig;

    if (!config) return {};

    return {
        title: {
            template: '%s',
            default: `${config.meta.title} - ${config.meta.subtitle}` || '',
        },
        description: config.meta.description || '',
        openGraph: {
            title: `${config.meta.title}` || '',
            description: config.meta.description || '',
            url: config.meta.url || '',
            images: [
                {
                    url: config.meta.logo.mark || '',
                    alt: config.meta.name || '',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${config.meta.title}` || '',
            description: config.meta.description || '',
            images: config.meta.logo.mark ? [config.meta.logo.mark] : [],
        },
        icons: {
            icon: [
                {
                    media: '(prefers-color-scheme: light)',
                    url: config.meta.favicon,
                    href: config.meta.favicon,
                },
                {
                    media: '(prefers-color-scheme: dark)',
                    url: config.meta.favicon,
                    href: config.meta.favicon,
                },
            ],
        },
    };
}

export default async function Layout({ children }: TLayoutProps) {
    const config = themeConfig;

    return (
        <>
            <Aos />
            <html lang="en" className={cn(['scroll-smooth [--scroll-mt:9.875rem]', 'lg:[--scroll-mt:6.3125rem]'])} suppressHydrationWarning>
                <head>
                    <PublicEnvScript />
                    <style>
                        {`
                    :root {
                        ${Object.entries(config.theme.root)
                                .filter(([, value]) => !!value)
                                .map(([key, value]) => {
                                    let v = '';

                                    if (key === 'gradient') {
                                        return;
                                    }

                                    if (key === 'radius') {
                                        v = value as string;
                                    } else {
                                        const { h, s, l } = hexToHsl(value as string);
                                        v = `${h} ${s}% ${l}%`;
                                    }

                                    return `--${camelToKebab(key)}: ${v};`;
                                })
                                .join('\n')}
                    }

                    .dark {
                        ${Object.entries(config.theme.dark)
                                .filter(([, value]) => !!value)
                                .map(([key, value]) => {
                                    let v = '';

                                    if (key === 'gradient') {
                                        return;
                                    }

                                    if (key === 'radius') {
                                        v = value as string;
                                    } else {
                                        const { h, s, l } = hexToHsl(value as string);
                                        v = `${h} ${s}% ${l}%`;
                                    }

                                    return `--${camelToKebab(key)}: ${v};`;
                                })
                                .join('\n')}
                    }
                    
                `}
                    </style>
                </head>
                <body className={cn([fontMain.variable, 'font-main text-black antialiased bg-[#E8E8E8]'])}>
                    {!config?.maintenance?.isMaintenance ? (
                        <>
                            <Analytics config={config} />
                            <Providers config={config}>{children}</Providers>
                        </>
                    ) : (
                        <MaintenanceMode config={config} />
                    )}
                </body>
            </html>
        </>
    );
} 
