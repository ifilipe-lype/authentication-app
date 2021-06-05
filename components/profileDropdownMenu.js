import { useState } from "react";

import { useAuth } from "../hooks/useAuth";

export default function ProfileDropDownMenu({ photo, username }) {
    const auth = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div onClick={() => setDropdownOpen(!dropdownOpen)} className="relative cursor-pointer text-gray-6 dark:text-gray-5 transition">
            <div className="flex items-center">
                <div className="md:mr-2">
                    {
                        photo ? (
                            <img src={photo} alt="user avatar" className="w-8 h-8 object-top rounded-full object-cover" />
                        ) : (
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                            </span>
                        )
                    }
                </div>
                <div className="hidden md:flex items-center">
                    <span className="text-sm capitalize font-semibold">{username}</span>
                    <span className={`ml-2 block transition transform ${dropdownOpen ? "rotate-180" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 10l5 5 5-5z" /></svg>
                    </span>
                </div>
            </div>
            <nav className={`absolute right-0 w-48 mt-3 shadow-in-dark bg-white dark:bg-gray-dark dark:text-gray-3 transition flex border rounded-lg p-3 dark:border-gray-6 outline-gray-5 ${dropdownOpen ? "block opacity-100" : "hidden opacity-0"}`}>
                <ul className="flex w-full flex-col text-xs">
                    <li className="flex rounded-lg p-2 items-center transition dark:hover:text-gray-5 hover:bg-gray-2 dark:hover:bg-transparent">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                        </span>
                        <span className="capitalize">my profile</span>
                    </li>
                    <li className="flex rounded-lg p-2 items-center transition dark:hover:text-gray-5 hover:bg-gray-2 dark:hover:bg-transparent">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" /><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                        </span>
                        <span className="capitalize">group chat</span>
                    </li>
                    <li onClick={auth.signout} className="flex rounded-lg p-2 items-center transition text-red-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-transparent">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /></svg>
                        </span>
                        <span className="capitalize">logout</span>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
