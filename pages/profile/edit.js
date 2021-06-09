import Head from 'next/head';
import Link from "next/link";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import LoadingPage from "../../components/loading-page";

import ProfileDropDownMenu from "../../components/profileDropdownMenu";
import ThemeSwitcher from '../../components/themeSwitcher';
import AppLogo from '../../components/appLogo';
import AppFooter from "../../components/appFooter";
import { useEffect } from 'react';

import ProfileEditForm from "../../components/profile-edit-form";

function EditProfile() {
    const auth = useRequireAuth();

    const { user } = auth;

    async function updateProfile(values){
        await auth.updateProfile(values);
    }

    useEffect(async () => {
        if (auth.token) await auth.getProfile();
    }, [auth.token])

    if (!auth.token || !auth.user) return <LoadingPage />

    return (
        <div>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container text-sm md:text-base px-4 lg:px-0 mx-auto h-screen flex flex-col items-center w-full">
                <header className="w-full py-2">
                    <div className="flex w-full items-center justify-between">
                        <AppLogo />
                        <div className="flex items-center">
                            <div className="mr-6 flex items-center">
                                <ThemeSwitcher />
                            </div>
                            <ProfileDropDownMenu username={user.name} photo={user.photo} />
                        </div>
                    </div>
                </header>

                <div className="md:w-10/12 lg:w-8/12 py-8 w-full flex flex-col items-center">
                    <div className="pb-8 mt-4 flex w-full">
                        <Link href="/profile">
                            <div class="text-blue-1 flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="">Back</span>
                            </div>
                        </Link>
                    </div>

                    <section className="w-full md:border border-gray-5 py-8 rounded-lg">
                        <header className="form-group border-b-0">
                            <div>
                                <h2 className="text-xl text-gray-6 dark:text-white">Change Info</h2>
                                <span className="text-gray-3 mt-2 leading-tight block text-sm dark:text-gray-5">Changes will be reflected to every services</span>
                            </div>
                        </header>
                        
                        <ProfileEditForm updateProfile={updateProfile} user={user} />
                    </section>

                    <AppFooter />
                </div>
            </main>
        </div>
    )
}

export default EditProfile;
