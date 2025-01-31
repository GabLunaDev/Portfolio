import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { languages } from '@/common/types';
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next';

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GabLunaDev - Portfólio',
  description: 'Gabriel Luna Portfolio',
}
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as languages)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} style={{scrollBehavior:'smooth'}}>
      <body className={jetbrains_mono.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}