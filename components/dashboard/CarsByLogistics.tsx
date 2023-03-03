import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";

const CarsByLogistics = () => {
  const [data, setData] = useState<Array<Array<{ z: string; w: number }>>>([]);

  const getData = () => {
    DashboardApi.carsByLogistics().then(setData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HighchartsReact
      containerProps={{ style: { height: "100%" } }}
      highcharts={Highcharts}
      options={{
        chart: {
          type: "column",
        },
        title: {
          text: "Camionetas por Logistica",
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        credits: {
          enabled: false,
        },
        yAxis: {
          min: 0,
          title: {
            text: "# camionetas",
          },
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          pointFormat: "cantidad: <b>{point.y}</b>",
        },
        series: [
          {
            name: "Population",
            data,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFFF",
              align: "right",
              format: "{point.y}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
              },
            },
          },
        ],
      }}
    />
  );
};

export default CarsByLogistics;
