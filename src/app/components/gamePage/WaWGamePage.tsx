"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gameData } from "../dataBase/database";
import SkeletonCard from "../Skeleton";

interface Props {
  paramsId: string;
}

interface IData {
  name: string;
  description: string;
  image: string;
  id: string;
  key: string;
  campaign: number;
  zombies: number;
  multiplayer: number;
  criticScore: number;
}

function WaWGamePage({ paramsId }: Props) {
  const [dataList, setDataList] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const data = gameData();

  const fetchData = async () => {
    setTimeout(() => {
      const newList: any = data.filter((el: any) => paramsId === el.id);

      if (data.length > 0) {
        const totalScore =
          newList[0].campaign + newList[0].zombies + newList[0].multiplayer;
        setTotal(totalScore);
      }
      setDataList(newList);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataList[0]);

  return (
    <>
      {dataList[0] && dataList.length > 0 && !loading ? (
        <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
          <div className="w-3/4 flex items-center flex-col">
            <div className="flex justify-center w-[400px] h-[500px] relative items-start gap-x-8">
              <Image
                src={dataList[0].image}
                alt="game-icon"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="py-4 gap-x-4 flex-col md:justify-start md:flex-row justify-start items-start flex md:items-end">
              <h1 className="md:text-3xl text-xl">{dataList[0].name}</h1>
              <h2 className="text-[gray] md:text-lg font-light">
                Critic Score:{" "}
                <span
                  className={`${
                    dataList[0].criticScore >= 84
                      ? "text-casualGreen"
                      : dataList[0].criticScore >= 80
                      ? "text-midYellow"
                      : "text-midRed"
                  }`}
                >
                  {dataList[0].criticScore}
                </span>
              </h2>
            </div>
            <div className="flex flex-col justify-start gap-y-4 w-full items-center">
              <ul>
                <li className="text-[#d1d1d1] text-base md:text-xl">
                  Overall: {total?.toFixed(1)}/30
                </li>
                <hr className="border border-white" />
                <li className="ratingItem">
                  Campaign: {dataList[0].campaign}/10
                </li>
                <li className="ratingItem">
                  Zombies: {dataList[0].zombies}/10
                </li>
                <li className="ratingItem">
                  Multiplayer: {dataList[0].multiplayer}/10
                </li>
              </ul>
              <p className="text-center font-extralight">
                {dataList[0].description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonCard />
      )}
    </>
  );
}

export default WaWGamePage;
