import React from "react";
import Cards from "./Cards";
import Header from "./Header";

function Home({ user }) {
  return (
    <div>
      <Header user={user} />
      <Cards user={user} />
    </div>
  );
}

export default Home;
