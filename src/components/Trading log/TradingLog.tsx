import React from "react";
import styles from "./tradingLog.module.css"; // Import the CSS Module

interface TradingLogProps {
  selectedTrader: any; // Trader data passed from App
}

const TradingLog: React.FC<TradingLogProps> = ({ selectedTrader }) => {
  if (!selectedTrader) {
    return <div>No trader selected.</div>;
  }

  return (
    <div className={styles.tradingLog}>
      <h2 className="text-xl font-semibold mb-4">
       {selectedTrader.username}
      </h2>
      <div>
        {/* Table-like structure using ul and li */}
        <ul className="list-none p-0 m-0">
          {/* Column Headers */}
          <li className={styles.columnHeaders}>
            <ul className={styles.positionDetails}>
              <li className={styles.positionRowHeading}>
                <span className={styles.label}>Open Time</span>
                <span className={styles.label}>Symbol</span>
                <span className={styles.label}>Position ID</span>
                <span className={styles.label}>Type</span>
                <span className={styles.label}>Volume</span>
                <span className={styles.label}>Open Price</span>
                <span className={styles.label}>Close Time</span>
                <span className={styles.label}>Close Price</span>
                <span className={styles.label}>Profit</span>
                <span className={styles.label}>Change</span>
              </li>
            </ul>
          </li>

          {/* Mapping through positions array */}
          {selectedTrader.positions.map((position, index) => (
            <li key={index} className={styles.tradePosition}>
              <ul className={styles.positionDetails}>
                <li className={styles.positionRow}>
                  <span className={styles.value}>{position.openTime}</span>
                  <span className={styles.value}>{position.symbol}</span>
                  <span className={styles.value}>{position.positionId}</span>
                  <span className={styles.value}>{position.type}</span>
                  <span className={styles.value}>{position.volume}</span>
                  <span className={styles.value}>{position.openPrice}</span>
                  <span className={styles.value}>{position.closeTime}</span>
                  <span className={styles.value}>{position.closePrice}</span>
                  <span className={styles.value}>{position.profit}</span>
                  <span className={styles.value}>{position.change}</span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TradingLog;