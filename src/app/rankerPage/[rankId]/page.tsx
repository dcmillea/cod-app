import BossesRank from "@/app/components/rankerPages/BossesRank";
import RankContainer from "@/app/components/rankerPages/RankContainer";

export default function Page({ params }: { params: { rankId: string } }) {
  function camelCaseToTitleCase(camelCaseString: string) {
    // Add a space before each uppercase letter
    const result = camelCaseString.replace(/([A-Z])/g, " $1");
    // Capitalize the first letter and return the result
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return (
    <section className="flex w-full bg-gray-900 justify-center min-h-screen flex-col items-center">
      <header className="flex max-w-screen-xl w-full mt-32 items-center">
        <h1 className="md:text-5xl text-4xl mx-auto font-bold">
          {camelCaseToTitleCase(params.rankId)} Ranked
        </h1>
      </header>
      {params.rankId === "zombieMaps" && <RankContainer />}
      {params.rankId === "bosses" && <BossesRank />}
    </section>
  );
}
