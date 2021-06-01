import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import SignUpForm from "../components/signup-form";

export default function SignUp() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    const [error, setError] = useState("");

    function handleSubmit(values){
        console.log(values)
    }

    useEffect(() => {
        /**
         * Force re-rendering for localStore theme value.
         */
        setIsDark(theme === "dark");
    }, []);

    useEffect(() => {
        setTheme(isDark ? "dark" : "light");
    }, [isDark]);

    function toggleTheme() {
        setIsDark(!isDark);
    }

    return (
        <main className="container px-5 mx-auto lg:px-0 md:w-full flex flex-col py-8 items-center justify-center min-h-screen w-full">
            <section className="max-w-md w-full rounded-2xl md:py-6 md:px-5 lg:py-12 lg:px-10 md:border">
                <header className="text-gray-6 dark:text-gray-1">
                    <div className="flex items-center justify-between">
                        <h1>
                            <img src={isDark ? "/devchallenges-light.svg" : "/devchallenges.svg"} />
                        </h1>
                        <button className="outline-none focus:outline-none" onClick={toggleTheme}>
                            {
                                isDark ? (
                                    <svg className="w-6 h-6 text-gray-1 fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24" /><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" /></svg>
                                ) : (
                                    <svg className="w-6 h-6 fill-current text-gray-dark" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24" /><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" /></svg>
                                )
                            }
                        </button>
                    </div>
                    <h3 className="text-lg font-semibold leading-tight mt-4 md:mt-8">
                        Join thousands of learners from around the world
                        </h3>
                    <p className="mt-3 text-base leading-tight">
                        Master web development by making real-life projects. There are mutliple paths for you to choose.
                        </p>
                </header>
                <div className="my-8">
                    {
                        error && (
                            <div className="mb-4 font-normal text-red-400">
                                <p>{error}</p>
                            </div>
                        )
                    }
                    <SignUpForm postSignUp={handleSubmit} />
                </div>

                <footer className="flex flex-col items-center justify-center">
                    <span className="text-sm text-gray-3">or continue with these social profile</span>
                    <div className="mt-5">
                        <ul className="flex items-center mb-3">
                            <li className="mr-5">
                                <button className="outline-none focus:outline-none">
                                    <img src="/Google.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button className="outline-none focus:outline-none">
                                    <img src="/Facebook.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button className="outline-none focus:outline-none">
                                    <img src="/Twitter.svg" />
                                </button>
                            </li>
                            <li className="mr-5">
                                <button className="outline-none focus:outline-none">
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
            <footer className="mt-6 flex items-center justify-between w-full max-w-md">
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
