import { createContext, useState } from "react";


export const SubscriptionContext = createContext()
SubscriptionContext.displayName = "Subscription"

export const SubscriptionProvider = ({ children }) => {
    const [email, setEmail] = useState("")

    return (
        <SubscriptionContext.Provider value = {{ email, setEmail }}>
            {children}
        </SubscriptionContext.Provider>
    )
}