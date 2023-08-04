import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";

const RutasByLogistics = ({
  startDate,
  endDate,
  isValidRange,
  range,
}: {
  startDate: Date;
  endDate: Date;
  isValidRange: boolean;
  range: string;
}) => {
  const [data, setData] = useState<{ name: string; y: number }[]>([]);

  useEffect(() => {
    if (!isValidRange) return;

    DashboardApi.rutasByLogistics({ startDate, endDate }).then(setData);
  }, [isValidRange, startDate, endDate]);

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
          text: "Total de rutas por logistica",
          align: "left",
        },
        subtitle: {
          text: range,
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
                "<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Total:  {point.y:,.0f}",
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

export default RutasByLogistics;
