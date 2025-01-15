"use client";
import React, { useEffect, useState } from "react";
import DataStatsOne from "./DataStats/DataStatsOne";
import ChartOne from "./Charts/ChartOne";
import ChartTwo from "./Charts/ChartTwo";
import { getStats } from "@/redux/apiCalls";
// import ChartThree from "../Charts/ChartThree";
// import ChartTwo from "../Charts/ChartTwo";
// import ChatCard from "../Chat/ChatCard";
// import TableOne from "../Tables/TableOne";
// import MapOne from "../Maps/MapOne";
// import DataStatsOne from "@/components/DataStats/DataStatsOne";
// import ChartOne from "@/components/Charts/ChartOne";

const AdminHome = () => {

    const [stats, setStats] = useState();

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getStats();
            setStats(data);
        };

        fetchStats();
    }, [])

  return (
    <>
      <DataStatsOne stats={stats} />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default AdminHome;