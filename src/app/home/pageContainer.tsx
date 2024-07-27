import { Header } from "@/components/header/page";
import "./styles.scss";
import { Footer } from "@/components/footer/page";

import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";

export default function PageContainer() {
  return (
    <div className="page-container">
      <Header />
      <div className="page-body">
        <section id="section1">
          <Section1 />
        </section>

        <section id="section2">
          <Section2 />
        </section>

        <section id="section3">
          <Section3 />
        </section>

        <section id="section4">
          <Section4 />
        </section>

        <section id="section5">
          <Section5 />
        </section>
      </div>
      <Footer />
    </div>
  );
}
