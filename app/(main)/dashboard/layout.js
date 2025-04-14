import React from 'react'
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
const layout = ({ children }) => {
  return (
    <div className="px=5">

    <div className="-ml-15 -mt-18 flex items-center justify-between mb-8">
        <h1 className="text-6xl font-bold gradient-title py-3"> Industry Insights</h1>
       </div> 
       <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  )
}

export default layout