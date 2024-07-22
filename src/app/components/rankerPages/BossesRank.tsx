import { bossRanker } from "../dataBase/database";
import BossRank from "./BossRank";

function BossesRank() {
  const data = bossRanker();

  return (
    <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
      {data.map((el: any, index: number = 0) => (
        <BossRank
          key={el.key}
          name={el.name}
          bossType={el.boss_type}
          description={el.description}
          image={el.image}
          innovation={el.innovation}
          mapFit={el.map_fit}
          reward={el.reward}
          rank={index + 1}
        />
      ))}
    </div>
  );
}

export default BossesRank;
