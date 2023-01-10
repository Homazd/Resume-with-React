//Components
import { Fragment } from "react";
import { Education } from "../components/Page/components/Education";
import { Experience } from "../components/Page/components/Experience";
import { Header } from "../components/Page/components/Header/Header";
import { Interests } from "../components/Page/components/Interests";
import { Navbar } from "../components/Page/components/Navbar";
import { Skills } from "../components/Page/components/Skills";

export function App() {
  return (
    <Fragment>
      {/* NavBar */}
      <Navbar />

      <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <Header />
        <hr className="m-0" />
        {/* <!-- Experience--> */}
        <Experience />
        <hr className="m-0" />
        {/* <!-- Education--> */}
        <Education />
        <hr className="m-0" />
        {/* <!-- Skills--> */}
        <Skills />
        <hr className="m-0" />
        {/* <!-- Interests--> */}
        <Interests />

        <hr className="m-0" />
      </div>
    </Fragment>
  );
}
