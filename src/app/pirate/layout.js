"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/components/dashboard/css/satoshi.css";
import "@/components/dashboard/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/dashboard/common/Loader";

export default function RootLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <div>
            {loading ? <Loader /> : children}
        </div>
    );
}
