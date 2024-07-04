import Layout from "~/layout";
import { Fragment, Suspense, useEffect, useMemo } from "react";
import FallbackSuspence from "~/components/fallbackSuspence";

function LayoutConfig({children,path,configPath=[]}) {
    const hasNotLayout = useMemo(()=>{
        return configPath.find((item)=> item === path)
    },[path])
    let Page = <Suspense fallback={<FallbackSuspence />}>{children}</Suspense>
    return (  
        <>
            {hasNotLayout?Page:<Layout>{Page}</Layout>}
        </>
    );
}

export default LayoutConfig;