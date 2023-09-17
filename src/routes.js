import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "pages/FormPage";
import React from 'react'
import SuccessPage from "pages/SuccessPage";
import { SubscriptionProvider } from "context/Subscription";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <SubscriptionProvider>
                <Routes>
                    <Route path="/" element={<FormPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </SubscriptionProvider>
        </BrowserRouter>
    )
}
