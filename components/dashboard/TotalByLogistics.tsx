import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";

const TotalByLogistics = () => {
  const [data, setData] = useState<{ name: string; y: number }[]>([]);

  const getData = () => {
    DashboardApi.totalByLogistics().then(setData);
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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "Ingresos total por logistica",
          align: "left",
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format:
                "<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Total: $ {point.y:,.1f}",
            },
          },
        },
        series: [
          {
            name: "Total",
            colorByPoint: true,
            data,
          },
        ],
      }}
    />
  );
};

export default TotalByLogistics;
