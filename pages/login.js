import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import { useTheme } from 'next-themes';

import LogoAndThemeSwitcher from "../components/logoAndThemeSwitcher";
import LoginForm from "../components/login-form";
import SocialLogins from "../components/social-logins";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
    const auth = useAuth();
    const { theme, setTheme } = useTheme();

    const [error, setError] = useState("");
    const [isSubmting, setIsSubmting] = useState(false);

    async function handleSubmit({ email, password}) {
        setIsSubmting(true);
        setError("");
        
        try {
            await auth.signin({ email, password });
        } catch (e) {
            setIsSubmting(false);
            setError(e.message);
        }
    }

    function toggleTheme() {
        setTheme(!isDark() ? "dark" : "light");
    }

    function isDark(){ return theme === "dark"; }

    return (
        <>
            <Head>
                <title>Auth App - Login</title>
            </Head>
            <main className="container px-5 mx-auto lg:px-0 md:w-full flex flex-col py-8 items-center justify-center min-h-screen w-full">
                <section className="max-w-md w-full rounded-2xl md:py-6 md:px-5 lg:py-12 lg:px-10 md:border">
                    <header className="text-gray-6 dark:text-gray-1">
                        <LogoAndThemeSwitcher />
                        <h3 className="text-lg font-semibold leading-tight mt-4 md:mt-8">
                            Login
                        </h3>
                    </header>
                    <div className="my-8">
                        {
                            error && (
                                <div className="mb-4 text-sm font-normal text-red-400">
                                    <p>{error}</p>
                                </div>
                            )
                        }
                        <LoginForm isSubmting={isSubmting} postLogin={handleSubmit} />
                    </div>

                    <footer className="flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-3">or continue with these social profile</span>
                        <div className="mt-5">
                            <SocialLogins />
                        </div>
                        <span className="text-sm text-gray-3">
                            Don't have an account yet ?
                        <Link href="/sign-up"><a className="text-blue-1"> Register</a></Link>
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
        </>
    )
}
