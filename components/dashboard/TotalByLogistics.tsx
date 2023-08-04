import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";

const TotalByLogistics = ({
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

    DashboardApi.totalByLogistics({ startDate, endDate }).then(setData);
  }, [isValidRange, startDate, endDate]);

  return (
    <HighchartsReact
      containerProps={{ style: { height: "100%" } }}
      highcharts={Highcharts}
      options={{
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
          },
        },
        title: {
          text: "Total de ingresos por logistica",
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
            innerSize: 100,
            depth: 45,
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format:
                "<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Total: $ {point.y:,.2f}",
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
