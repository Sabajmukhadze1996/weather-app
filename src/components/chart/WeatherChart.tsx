import React, { useMemo, useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { WeatherChartProps } from "../../interfaces/WeatherChartProps";

const WeatherChart: React.FC<WeatherChartProps> = ({
  degrees,
  humidity,
  visibility,
  wind,
}: WeatherChartProps) => {
  const { content } = useContext(Translation);

  const data = useMemo(
    () => [
      { name: content?.current_temp, value: degrees },
      { name: content?.humidity, value: humidity },
      { name: content?.visibility, value: visibility },
      { name: content?.wind_speed, value: wind },
    ],
    [content, degrees, humidity, visibility, wind]
  );

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PieChart width={310} height={270}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default WeatherChart;
