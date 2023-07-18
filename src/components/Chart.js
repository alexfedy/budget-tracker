import React, { useContext } from "react";
import ReactEcharts from "echarts-for-react";
import { AppContext } from "../context/AppContext";

const Chart = () => {
  const { expenses } = useContext(AppContext);
  let colorArray = ["#36D399", "#377CFB", "#EA5234", "#FBBD23", "#3ABFF8"];
  let colorIndex = -1;

  let types = expenses.map((expense) => {
    return expense.name;
  });
  let values = expenses.map((expense) => {
    colorIndex++;
    if (colorIndex >= colorArray.length) {
      colorIndex = 0;
    }
    return {
      value: expense.cost,
      // Specify the style for single bar
      itemStyle: {
        color: colorArray[colorIndex],
      },
    };
  });

  const option = {
    xAxis: {
      type: "category",
      data: types,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "bar",
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{ height: "clamp(400px,100%,500px)", width: "100%" }}
    />
  );
};
export default Chart;
