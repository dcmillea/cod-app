import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
  power: number;
  ammo: number;
  accessibility: number;
  innovation: number;
  reliability: number;
  aesthetic: number;
  infinteDamage: boolean;
  rank: number;
  overall: number;
}

function WonderWeaponItem({
  name,
  description,
  image,
  power,
  ammo,
  accessibility,
  reliability,
  aesthetic,
  innovation,
  rank,
  overall,
  infinteDamage,
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
                Overall: {overall?.toFixed(1)}/60
              </li>
              <hr className="border border-white" />
              <li className="ratingItem">Power: {power}/10</li>
              <li className="ratingItem">Ammo: {ammo}/10</li>
              <li className="ratingItem">Reliability: {reliability}/10</li>
              <li className="ratingItem">Accessibility: {accessibility}/10</li>
              <li className="ratingItem">Innovation: {innovation}/10</li>
              <li className="ratingItem">Aesthetic: {aesthetic}/10</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-8 items-start mt-2 mb-2 md:mt-6 md:mb-4 flex-col">
            <h2 className="text-3xl font-semibold">
              {rank}. {name}
            </h2>
            <h2 className="text-[gray] text-xl font-thin">
              Infinite Damage:{" "}
              <span
                className={`${
                  infinteDamage ? "text-casualGreen" : "text-midRed"
                }`}
              >
                {infinteDamage ? "true" : "false"}
              </span>
            </h2>
          </div>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WonderWeaponItem;
