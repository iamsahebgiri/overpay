import React from "react";
import { Footer } from "components/layout/footer";
import { Header } from "components/layout/header";

const FullHeader = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col justify-between">
      <Header />
      <div className="mx-auto w-full max-w-7xl px-2 py-3">
        <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullHeader;
