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
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            document.cookie = `user=${user}; path=/; max-age=86400; samesite=strict`
            document.cookie = `token=${user.token}; path=/; max-age=86400; samesite=strict`
        } else {
            localStorage.removeItem("user")
            document.cookie = "user=; path=/; max-age=0"
            document.cookie = "token=; path=/; max-age=0"
        }
    }, [user]);


    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setIsLoaded(true);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};