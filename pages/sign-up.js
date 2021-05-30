export default function SignUp() {
    return (

        <main className="container px-5 mx-auto lg:px-0 md:w-full flex flex-col py-4 items-center justify-center min-h-screen w-full">
            <section className="max-w-md w-full rounded-2xl md:py-6 md:px-5 lg:py-12 lg:px-10 md:border">
                <header>
                    <h1>
                        <img src="/devchallenges.svg" />
                    </h1>
                    <h3 className="text-lg text-gray-6 font-semibold leading-tight mt-4 md:mt-8">
                        Join thousands of learners from around the world
                        </h3>
                    <p className="text-gray-6 mt-3 text-base leading-tight">
                        Master web development by making real-life projects. There are mutliple paths for you to choose.
                        </p>
                </header>
                <div className="my-8">
                    <form method="POST">
                        <div className="mb-3">
                            <label className="flex items-center group border transition border-gray-5 p-2 focus-within:border-gray-3 rounded-lg">
                                <span>
                                    <svg className="fill-current text-gray-3 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                </span>
                                <input className="pl-2 text-gray-6 outline-none" type="text" placeholder="name" />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="flex items-center group border transition border-gray-5 p-2 focus-within:border-gray-3 rounded-lg">
                                <span>
                                    <svg className="fill-current text-gray-3 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </span>
                                <input className="pl-2 text-gray-6 outline-none" type="email" placeholder="email" />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="flex items-center group border transition border-gray-5 p-2 focus-within:border-gray-3 rounded-lg">
                                <span>
                                    <svg className="fill-current text-gray-3 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                                </span>
                                <input className="pl-2 text-gray-6 outline-none" type="password" placeholder="password" />
                            </label>
                        </div>

                        <button type="submit" className="w-full mt-3 p-2 bg-blue-1 text-white rounded-lg">
                            Start coding now
                            </button>
                    </form>
                </div>

                <footer className="flex flex-col items-center justify-center">
                    <span className="text-sm text-gray-3">or continue with these social profile</span>
                    <div className="mt-5">
                        <ul className="flex items-center mb-3">
                            <li className="mr-5">
                                <button>
                                    <img src="/Google.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button>
                                    <img src="/Facebook.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button>
                                    <img src="/Twitter.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button>
                                    <img src="/Github.svg" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <span className="text-sm text-gray-3">
                        Already a member ?
                                <a href="" className="text-blue-1"> Login</a>
                    </span>
                </footer>
            </section>
            <footer className="mt-6 flex items-center justify-between w-full md:max-w-md">
                <span className="text-sm text-gray-3">
                    by <a className="hover:text-blue-1" href="https://twitter.com/ifilipe_lype">@ifilipe-lype</a>
                </span>

                <span className="text-sm text-gray-3">
                    <a className="hover:text-gray-4" href="https://devchallenges.io">devChallenges.io</a>
                </span>
            </footer>
        </main>
    )
}
