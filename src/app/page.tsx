// pages/index.tsx
"use client"; // This is used if you want to use hooks or state management in this component.

import Head from "next/head";

import ProductStockStatus from "./components/(dashboard)/Productstocksstatus";
import OverviewMetrics from "./components/(dashboard)/Overviewmetrics";



const Home = () => {
    return (
        <div>
            <Head>
                <title>Admin Dashboard</title>
                <meta name="description" content="Admin panel for managing shops and products" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <OverviewMetrics />
                <ProductStockStatus />
                {/*
                  Assuming SecureLandTransactions is a component you want to include 
                  from another part of your application.
                */}

            </main>
        </div>
    );
};

export default Home;