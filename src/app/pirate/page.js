import { Metadata } from "next";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";
import AdminHome from "@/components/dashboard/AdminHome";

export const metadata = {
  title:
    "Acacia Admin",
  description: "Acacia Admin",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <AdminHome />
      </DefaultLayout>
    </>
  );
}