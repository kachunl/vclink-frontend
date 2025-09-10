import Image from "next/image"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center justify-center gap-72 max-w-6xl w-full flex-col lg:flex-row lg:gap-72 md:gap-16 sm:gap-8">
                    <div className="flex-shrink-0 order-1 lg:order-1">
                        <Image
                            src="/vercel.svg"
                            alt="Batman"
                            width={200}
                            height={200}
                            className="w-48 h-48 object-cover rounded-lg shadow-lg md:w-36 md:h-36 sm:w-32 sm:h-32"
                            priority
                        />
                    </div>
                    
                    <div className="flex-1 max-w-[400px] min-w-[320px] w-full order-2 lg:order-2">
                        {children}
                    </div>
                </div>
            </div>
            
            <footer className="text-black text-sm font-bold text-center pb-5">
                © 2025 Batman
            </footer>
        </div>
    )
}