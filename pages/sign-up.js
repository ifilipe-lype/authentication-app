import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import LogoAndThemeSwitcher from "../components/logoAndThemeSwitcher";
import SignUpForm from "../components/signup-form";
import SocialLogins from "../components/social-logins";

export default function SignUp() {
    const auth = useAuth();

    const [error, setError] = useState("");
    const [isSubmting, setIsSubmting] = useState(false);

    async function handleSubmit(values) {
        setIsSubmting(true);
        setError("");

        try {
            await auth.signup(values);
        } catch (e) {
            setIsSubmting(false);
            setError(e.message);
        }
    }

    return (
        <>
            <Head>
                <title>Auth App - Register</title>
            </Head>
            <main className="container px-5 mx-auto lg:px-0 md:w-full flex flex-col py-8 items-center justify-center min-h-screen w-full">
                <section className="max-w-md w-full rounded-2xl md:py-6 md:px-5 lg:py-12 lg:px-10 md:border">
                    <header className="text-gray-6 dark:text-gray-1">
                        <LogoAndThemeSwitcher />
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
                                <div className="mb-4 text-sm font-normal text-red-400">
                                    <p>{error}</p>
                                </div>
                            )
                        }
                        <SignUpForm isSubmting={isSubmting} postSignUp={handleSubmit} />
                    </div>

                    <footer className="flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-3">or continue with these social profile</span>
                        <div className="mt-5">
                            <SocialLogins />
                        </div>
                        <span className="text-sm text-gray-3">
                            Already a member ?
                        <Link href="/login"><a className="text-blue-1"> Login</a></Link>
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
