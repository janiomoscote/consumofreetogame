"use client"
import { createContext, useState, useEffect, ReactNode } from "react";


type User = {
    name: string;
    lastName: string;
    email: string;
    token: string;
}


type UserContextType = {
    user?: User | null;
    setUser: (user: User) => void;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window === "undefined") return null;
        const storedUser = window.localStorage.getItem("user");
        if (!storedUser) return null;

        try {
            return JSON.parse(storedUser);
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            window.localStorage.setItem("user", JSON.stringify(user));
        } else {
            window.localStorage.removeItem("user");
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


