import './globals.css';
import {Inter} from 'next/font/google'
import clsx from 'clsx';
import Navbar from './components/NavBar';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next E-Commerce 13',
  description: 'Next E-Commerce utilizando a versão 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang='en'>
        <body className={clsx(inter.className, 'bg-slate-700')}>
            <Navbar />
            <main className='h-screen p-16'>{children}</main>
          
        </body>
      </html>
  );
}
