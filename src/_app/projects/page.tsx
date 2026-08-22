import { Footer } from "@/components/footer/page";
import { Header } from "@/components/header/page";
import React from "react";

const AllProjects = () => {
  return (
    <div>
      <Header scrollToSection={() => {}} activeSection="" />
      <div className="page-body">
        <div className="page-container">
          <div className="page-header">
            <h1>All Projects</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
