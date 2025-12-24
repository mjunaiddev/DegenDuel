import Dappnav from "@/src/components/dappnav";
import React from "react";
import Dapphero from "./dapphero";

const Page = () => {
  return (
    <>
      <div className="fixed left-0 right-0">
        <Dappnav />
      </div>
      <Dapphero />
    </>
  );
};

export default Page;
