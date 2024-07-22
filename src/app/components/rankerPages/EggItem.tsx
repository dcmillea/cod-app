import Image from "next/image";

interface Props {
  canSolo: string;
  description: string;
  image: string;
  name: string;
  gameplay_integration: number;
  innovation: number;
  narrative: number;
  payoff: number;
  replayAbility: number;
  rank: number;
  overall: number;
}

function EggItem({
  canSolo,
  description,
  image,
  name,
  gameplay_integration,
  innovation,
  narrative,
  payoff,
  replayAbility,
  rank,
  overall,
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
          <div>
            <ul>
              <li className="text-[#d1d1d1] text-base md:text-xl">
                Overall: {overall?.toFixed(1)}/50
              </li>
              <hr className="border border-white" />
              <li className="ratingItem">Narrative: {narrative}/10</li>
              <li className="ratingItem">
                Gameplay Integration: {gameplay_integration}/10
              </li>
              <li className="ratingItem">Replay Ability: {replayAbility}/10</li>
              <li className="ratingItem">Payoff: {payoff}/10</li>
              <li className="ratingItem">Innovation: {innovation}/10</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-8 items-start mt-2 mb-2 md:mt-6 md:mb-4 flex-col">
            <h2 className="text-3xl font-semibold">
              {rank}. {name}
            </h2>
            <h2 className="text-[gray] text-xl font-thin">
              Can solo:{" "}
              <span
                className={`${
                  canSolo === "true" ? "text-casualGreen" : "text-midRed"
                }`}
              >
                {canSolo}
              </span>
            </h2>
          </div>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EggItem;
