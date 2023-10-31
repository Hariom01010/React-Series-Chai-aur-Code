import React from "react";
import LottieView from "lottie-react"
import bikeMan from "../../lotties/bikeman.json";

function Home() {
  return (
    <>
      <div className="flex justify-between m-[15rem]">
        <div>
          <LottieView animationData={bikeMan} loop={true} style={{width:250}}/>
        </div>

        <div>
          <h1>Welcome to React Router</h1>
          <p>
            React Router is a JavaScript framework that lets us handle client
            and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page. It also allows us to use browser
            history features while preserving the right application view.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
