import React from "react";
import styles from "./metricsDetails.module.css";
import EquityChart from "./EquityChart";

interface TradingLogProps {
  selectedTrader: any; // Trader data passed from App
}

const MetricsDetails: React.FC<TradingLogProps> = ({ selectedTrader }) => {
  if (!selectedTrader) {
    return <div>No trader selected.</div>;
  }
  const metricData = [
    {
      title: "Starting Balance",
      value: selectedTrader.metrics.startingBalance,
    },
    { title: "Current Equity", value: selectedTrader.metrics.currentEquity },
    { title: "Current Balance", value: selectedTrader.metrics.currentBalance },
    { title: "Cumulative PnL", value: selectedTrader.metrics.cumulativePnL },
    { title: "Return", value: `${selectedTrader.metrics.return}%` },
    { title: "Active Days", value: selectedTrader.metrics.activeDays },
    {
      title: "Average Winning Trade",
      value: selectedTrader.metrics.averageWinningTrade,
    },
    { title: "Profit Factor", value: selectedTrader.metrics.profitFactor },
    { title: "Trades Placed", value: selectedTrader.metrics.tradesPlaced },
  ];
  {
    return (
      <div className={styles.metricsDetails}>
        <h2 className="text-2xl font-semibold mb-4">
          {selectedTrader.username} -Performance
        </h2>
        <div className="flex gap-4 md:flex-col lg:flex-col xl:flex-row">
          <div className="mb-6  bg-blue-50 p-4 rounded-lg shadow-lg md:w-full md:text-base xl:w-1/4 ">
            {/* Table-like structure using ul and li */}
            <ul className={styles.metrics}>
              {metricData.map((metric, index) => (
                <li key={index} className={styles.metricRow}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricTitle}>{metric.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <EquityChart />
        </div>
      </div>
    );
  }
};
export default MetricsDetails;
