import React from "react";
//import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeItems from "../components/Web/HomeItems";



export default function Home() {
  return (
    <>
      {/*<Helmet>*/}

        <title>Agustín Navarro Galdon</title>
        <meta
          name="description"
          content="Home | Web sobre programación"
          data-react-helmet="true"
        />
      {/*</Helmet>*/}

      <MainBanner />
      <HomeItems />
      {/*<HowMyCoursesWork />
      <ReviewsCourses />
  */}
    </>
  );
}
