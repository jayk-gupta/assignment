import React from "react";
import styles from "./tradingLog.module.css"; // Import the CSS Module

// Define the type for a single Position
interface Position {
  openTime: string;
  symbol: string;
  positionId: string;
  type: string;
  volume: number;
  openPrice: number;
  closeTime: string;
  closePrice: number;
  profit: number;
  change: number;
}

// Define the props for TradingLog
interface TradingLogProps {
  selectedTrader: {
    username: string;
    positions: Position[];
  } | null; // Trader data passed from App, nullable if no trader is selected
}

const TradingLog: React.FC<TradingLogProps> = ({ selectedTrader }) => {
  if (!selectedTrader) {
    return <div>No trader selected.</div>;
  }

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className={styles.tradingLog}>
      <h2 className="text-xl font-semibold mb-4">{selectedTrader.username}</h2>
      <div>
        {/* Table-like structure using ul and li */}
        <ul className="list-none p-0 m-0">
          {/* Column Headers */}
          <li className={styles.columnHeaders}>
            <ul className={styles.positionDetails}>
              <li className={styles.positionRowHeading}>
                <span className={`${styles.label} ${styles.openTime}`}>
                  Open Time
                </span>
                <span className={`${styles.label} ${styles.symbol}`}>
                  Symbol
                </span>
                <span className={`${styles.label} ${styles.positionId}`}>
                  Position ID
                </span>
                <span className={`${styles.label} ${styles.type}`}>Type</span>
                <span className={`${styles.label} ${styles.volume}`}>
                  Volume
                </span>
                <span className={`${styles.label} ${styles.openPrice}`}>
                  Open Price
                </span>
                <span className={`${styles.label} ${styles.closeTime}`}>
                  Close Time
                </span>
                <span className={`${styles.label} ${styles.closePrice}`}>
                  Close Price
                </span>
                <span className={`${styles.label} ${styles.profit}`}>
                  Profit
                </span>
                <span className={`${styles.label} ${styles.change}`}>
                  Change
                </span>
              </li>
            </ul>
          </li>

          {/* Mapping through positions array */}
          {selectedTrader.positions.map((position: Position, index: number) => (
            <li key={index} className={styles.tradePosition}>
              <ul className={styles.positionDetails}>
                <li className={styles.positionRow}>
                  <span className={`${styles.value} ${styles.openTime}`}>
                    {formatDate(position.openTime)}
                  </span>
                  <span className={`${styles.value} ${styles.symbol}`}>
                    {position.symbol}
                  </span>
                  <span className={`${styles.value} ${styles.positionId}`}>
                    {position.positionId}
                  </span>
                  <span className={`${styles.value} ${styles.type}`}>
                    {position.type}
                  </span>
                  <span className={`${styles.value} ${styles.volume}`}>
                    {position.volume}
                  </span>
                  <span className={`${styles.value} ${styles.openPrice}`}>
                    {position.openPrice}
                  </span>
                  <span className={`${styles.value} ${styles.closeTime}`}>
                    {formatDate(position.closeTime)}
                  </span>
                  <span className={`${styles.value} ${styles.closePrice}`}>
                    {position.closePrice}
                  </span>
                  <span className={`${styles.value} ${styles.profit}`}>
                    {position.profit}
                  </span>
                  <span className={`${styles.value} ${styles.change}`}>
                    {position.change}
                  </span>
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
