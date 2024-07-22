import Image from "next/image";

interface Props {
  description: string;
  image: string;
  name: string;
  rank: number;
  overall: number;
  weaponName: string;
  versatility: number;
  abilityName: string;
  weapon: number;
  ability: number;
  aesthetic: number;
  inBO4: boolean;
}

function SpecialistRankItem({
  description,
  image,
  name,
  rank,
  overall,
  aesthetic,
  versatility,
  weapon,
  weaponName,
  ability,
  abilityName,
  inBO4,
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
                Overall: {overall?.toFixed(1)}/40
              </li>
              <hr className="border border-white" />
              <li className="ratingItem">
                {weaponName}: {weapon}/10
              </li>
              <li className="ratingItem">
                {abilityName} : {ability}/10
              </li>
              <li className="ratingItem">Aesthetic: {aesthetic}/10</li>
              <li className="ratingItem">Versatility: {versatility}/10</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-8 items-start mt-2 mb-2 md:mt-6 md:mb-4 flex-col">
            <h2 className="text-3xl font-semibold">
              {rank}. {name}
            </h2>
            <h2 className="text-[gray] text-xl font-thin">
              In BO4:{" "}
              <span className={`${inBO4 ? "text-casualGreen" : "text-midRed"}`}>
                {inBO4 ? "true" : "false"}
              </span>
            </h2>
          </div>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SpecialistRankItem;
