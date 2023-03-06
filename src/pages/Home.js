import React from "react";
import ReactDOM from "react-dom";

function Home() {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("/login");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <>Redirecting to login page</>;
}

export default Home;
