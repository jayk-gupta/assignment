import React, { useEffect, useState } from "react";
import leaderboard from "../../data/leaderboard/leaderboard.json";
import userData from "../../data/users/data.json";
import styles from "./LeaderBoard.module.css";
interface LeaderBoardProps {
  rank: number;
  name: string;
  returnPercentage: string;
  profit: string;
}
interface LeaderBoardComponentProps {
  onTraderSelect: (trader: any) => void; // Callback to send selected trader to App
}

const LeaderBoard: React.FC<LeaderBoardComponentProps> = ({
  onTraderSelect,
}) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderBoardProps[]>(
    []
  );
  const [selectedTraderRank, setSelectedTraderRank] = useState<number | null>(
    null
  );

  useEffect(() => {
  setLeaderboardData(leaderboard.leaderboard);
},[])

  const handleTraderClick = (traderRank: number) => {
    const trader = userData.users.find((trader) => trader.rank === traderRank);
    if (trader) {
      setSelectedTraderRank(traderRank); // Highlight the selected trader
      onTraderSelect(trader); // Notify App about the selected trader
    }
  };

  return (
    <div className={styles.leaderboard}>
      <h3 className="text-2xl py-2">Top 10 Traders</h3>
      <ul className={styles.list}>
        {/* Header Row */}
        <li className={`${styles.listItem} ${styles.header}`}>
          <span className={styles.rank}>#Rank</span>
          <span className={styles.name}>Name</span>
          <span className={styles.returnPercentage}>Return %</span>
          <span className={styles.profit}>$ Profit</span>
        </li>

        {/* Trader Rows */}
        {leaderboardData.map((trader) => (
          <li
            key={trader.rank}
            className={`${styles.listItem} ${selectedTraderRank === trader.rank ?  "bg-blue-50"  : ""
            }`}
            onClick={() => handleTraderClick(trader.rank)}
          >
            <span className={styles.rank}>{trader.rank}</span>
            <span className={styles.name}>{trader.name}</span>
            <span className={styles.returnPercentage}>
              {trader.returnPercentage}
            </span>
            <span className={styles.profit}>{trader.profit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
