import "./Chart.css";

import { ChartBar } from "./ChartBar";

export const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMax}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
};
