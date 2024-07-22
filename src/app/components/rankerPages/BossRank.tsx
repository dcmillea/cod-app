import Image from "next/image";

interface Props {
  name: string;
  bossType: string;
  description: string;
  image: string;
  innovation: number;
  mapFit: string;
  reward: string;
  rank: number;
}

function BossRank({
  name,
  bossType,
  description,
  image,
  innovation,
  mapFit,
  reward,
  rank,
}: Props) {
  return (
    <div className="w-3/4">
      <div className="flex items-start flex-col ">
        <div className="flex items-start gap-x-6">
          <div className="w-[300px] h-[181px] relative">
            <Image
              src={image}
              alt="img"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <ul className="flex w-auto gap-y-2 flex-col ">
            <h2 className="font-light flex flex-row text-[gray]">
              Type: <span className="text-white ml-2">{bossType}</span>
            </h2>
            <h2 className="font-light flex flex-row text-[gray]">
              Map Fit:{" "}
              <span
                className={`${
                  mapFit === "good fit"
                    ? "text-casualGreen"
                    : mapFit === "neutral"
                    ? "text-midYellow"
                    : "text-midRed"
                } ml-2`}
              >
                {mapFit}
              </span>
            </h2>
            <h2 className="font-light flex flex-row text-[gray]">
              Reward: <span className="text-white ml-2">{reward}</span>
            </h2>
            <h2 className="font-light flex flex-row text-[gray]">
              Innovation:{" "}
              <span
                className={`${
                  innovation >= 7
                    ? "text-casualGreen"
                    : innovation >= 4
                    ? "text-midYellow"
                    : "text-midRed"
                } ml-2`}
              >
                {innovation}/10
              </span>
            </h2>
          </ul>
        </div>

        <div className="flex mt-4 items-center">
          <h2 className="text-3xl font-semibold">
            {rank}. {name}
          </h2>
        </div>
        <p className="font-thin">{description}</p>
      </div>
    </div>
  );
}

export default BossRank;
