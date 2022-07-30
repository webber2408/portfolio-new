// import Bars from "./components/bars";
import React, { Suspense } from "react";
const Bars = React.lazy(() => import("./components/bars"));

const App = () => {
  return (
    <div className="app-wrapper">
      <Suspense fallback={<div></div>}>
        <Bars />
      </Suspense>
    </div>
  );
};

export default App;
