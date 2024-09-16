import React from "react";
import { Hourglass } from "react-loader-spinner";
import classes from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={classes.myLoader}>
      Идет загрузка данных
      <Hourglass
        visible={true}
        height="35"
        width="35"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default MyLoader;
