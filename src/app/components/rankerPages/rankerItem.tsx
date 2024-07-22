import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  rating: Rating;
  mapType: string;
  total: number;
  rank: number;
}

interface Rating {
  atmosphere: number;
  layout: number;
  replayability: number;
  quest: number;
  innovation: number;
  gameplay: number;
}

function RankerItem({
  src,
  title,
  description,
  rating,
  mapType,
  total,
  rank,
}: Props) {
  return (
    <div className="w-3/4">
      <div className="flex items-start gap-x-8">
        <div className="w-[300px] h-[181px] relative">
          <Image
            src={src}
            alt="img"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div>
          <ul>
            <li className="text-[#d1d1d1] text-base md:text-xl">
              Overall: {total.toFixed(1)}/60
            </li>
            <hr className="border border-white" />
            <li className="ratingItem">Atmosphere: {rating.atmosphere}/10</li>
            <li className="ratingItem">Layout: {rating.layout}/10</li>
            <li className="ratingItem">
              Replay Ability: {rating.replayability}/10
            </li>
            <li className="ratingItem">Quest: {rating.quest}/10</li>
            <li className="ratingItem">Innovation: {rating.innovation}/10</li>
            <li className="ratingItem">Gameplay: {rating.gameplay}/10</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-8 items-start mt-2 mb-2 md:mt-6 md:mb-4 flex-col">
          <h2 className="text-3xl font-semibold">
            {rank}. {title}
          </h2>
          <h2 className="text-[gray] text-xl font-thin">
            Map Type:{" "}
            <span
              className={`${
                mapType === "casual"
                  ? "text-casualGreen"
                  : mapType === "competitive"
                  ? "text-midYellow"
                  : "text-midRed"
              }`}
            >
              {mapType}
            </span>
          </h2>
        </div>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}

export default RankerItem;
