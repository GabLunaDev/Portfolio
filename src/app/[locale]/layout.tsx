import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { languages } from '@/common/types';
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })
 
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
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}