import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

if (typeof Highcharts === "object") {
  highcharts3d(Highcharts);
  cylinder(Highcharts);
}

const RutasByDrivers = () => {
  const [data, setData] = useState<{ categories: string[]; data: number[] }>({
    categories: [],
    data: [],
  });

  const getData = () => {
    DashboardApi.rutasByDrivers().then(setData);
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
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25,
          },
        },
        title: {
          text: "Total de rutas por drivers",
        },
        xAxis: {
          categories: data.categories,
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          title: {
            margin: 20,
            text: "Rutas",
          },
        },

        tooltip: {
          headerFormat: "Driver: <b>{point.x}</b><br>",
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true,
            dataLabels: {
              enabled: true,
              format: "{point.y}",
            },
          },
        },
        series: [
          {
            data: data.data,
            name: "Rutas",
            showInLegend: false,
          },
        ],
      }}
    />
  );
};

export default RutasByDrivers;
