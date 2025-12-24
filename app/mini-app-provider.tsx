"use client";

import sdk from "@farcaster/miniapp-sdk";
import React from "react";

export default function MiniAppProvider({ children }: { children: React.ReactNode }){
    const [isSDKLoaded, setIsSDKLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        const load = async () => {
            sdk.actions.ready();
        };
        if (sdk && !isSDKLoaded) {
            setIsSDKLoaded(true);
            load();
        }
    }, [isSDKLoaded]);

    return(
        <>
            {children}
        </>
    )
}