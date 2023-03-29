import './globals.css';

export const metadata = {
    title: 'Alexander Aust',
    description: 'I\'m a Developer',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="w-full">{children}</body>
        </html>
    )
}
