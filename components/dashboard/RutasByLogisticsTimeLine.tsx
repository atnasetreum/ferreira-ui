import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import {
  DashboardApi,
  ResponseRutasByLogisticsTimeLine,
} from "../../utils/api";

const RutasByLogisticsTimeLine = () => {
  const [data, setData] = useState<ResponseRutasByLogisticsTimeLine | null>(
    null
  );

  const getData = () => {
    DashboardApi.rutasByLogisticsTimeLine().then(setData);
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
          type: "line",
        },
        title: {
          text: "Rutas por logistica",
        },
        subtitle: {
          text: "Ultimos 15 dias",
        },
        xAxis: {
          categories: data?.categories ?? [],
        },
        yAxis: {
          title: {
            text: "Total de rutas",
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 4,
              lineColor: "#666666",
              lineWidth: 1,
            },
          },
        },
        series: data?.series ?? [],
        credits: {
          enabled: false,
        },
      }}
    />
  );
};

export default RutasByLogisticsTimeLine;
