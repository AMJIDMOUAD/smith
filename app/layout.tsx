import './globals.css';

export const metadata = {
  title: 'Smith Agency AI',
  description: '5M autonomous Smith Agents powering the Exoverse',
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang='en' className='h-full'>
      <body className='min-h-screen antialiased'>{children}</body>
    </html>
  );
}