"use client"
import { createContext, useState, useContext, useEffect, ReactNode } from "react";


type User = {
    name: string;
    email: string;
    token: string;
}


type UserContextType = {
    user?: User | null;
    setUser: (user: User) => void;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>()
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return; // Wait until we've checked localStorage

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            // Make sure we stringify the user object for the cookie, otherwise it becomes [object Object]
            document.cookie = `user=${JSON.stringify(user)}; path=/; max-age=86400`
            document.cookie = `token=${user.token}; path=/; max-age=86400`
        }
        // Removed the aggressive else block that clears cookies. 
        // This prevents accidental deletion of cookies during React re-renders or strict-mode race conditions!
    }, [user, isLoaded]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};