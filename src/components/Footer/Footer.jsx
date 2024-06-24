import { FaBurger } from "react-icons/fa6"
const Footer = () => {
    const yearShow = new Date().getFullYear();
    return (
        <footer className="bg-white" >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div
                    className="flex flex-col items-center gap-4 rounded-lg bg-[#713F12] p-6 shadow-lg sm:flex-row sm:justify-between"
                >
                    <strong className="text-xl text-white sm:text-xl"> Make Your Next Career Move! </strong>

                    <button
                        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-[#713F12] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                       
                    >
                        <span className="text-sm font-medium"> Let's Get Started </span>

                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
                 
                    <div className="mt-16 sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center justify-center text-[#713F12] text-2xl font-bold sm:justify-start">
                            <FaBurger /> <span className="pl-2">YumYard</span>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                            Copyright &copy; {yearShow} Injamul Alam. All rights reserved.
                        </p>
                    </div>

            </div>
        </footer>
    )
}

export default Footer