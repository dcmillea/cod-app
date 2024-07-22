"use client";
import RankerItem from "@/app/components/rankerPages/rankerItem";
import { mapRanker } from "../dataBase/database";
import { useEffect, useState } from "react";

function RankContainer() {
  const data = mapRanker();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let item;
    let placeHolderArr: any = [];
    data.forEach((el: any) => {
      let total = 0;
      for (let key in el.rating) {
        total += el.rating[key];
      }

      item = {
        name: el.name,
        description: el.description,
        image: el.image,
        mapType: el.map_type,
        rating: el.rating,
        story: el.quest,
        overall: total,
        key: el.key,
      };
      placeHolderArr.push(item);
    });

    placeHolderArr.sort((a: any, b: any) => b.overall - a.overall);
    placeHolderArr.forEach((item: any, index: any) => {
      item.rank = index + 1;
    });

    setDataList(placeHolderArr);
  }, []);

  return (
    <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
      {dataList.map((el: any) => (
        <RankerItem
          key={el.key}
          src={el.image}
          title={el.name}
          description={el.description}
          rating={el.rating}
          total={el.overall}
          mapType={el.mapType}
          rank={el.rank}
        />
      ))}
    </div>
  );
}

export default RankContainer;
