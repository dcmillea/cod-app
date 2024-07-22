import WaWGamePage from "@/app/components/gamePage/WaWGamePage";

function page({ params }: { params: { gameId: string } }) {
  function camelCaseToTitleCase(camelCaseString: string) {
    // Add a space before each uppercase letter or digit
    const result = camelCaseString.replace(/([A-Z0-9])/g, " $1");
    // Capitalize the first letter and return the result
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <section className="flex w-full bg-gray-900 justify-center min-h-screen flex-col items-center">
      <header className="flex max-w-screen-xl w-full mt-12 items-center">
        <h1 className="md:text-5xl mt-32 text-4xl mx-auto font-bold">
          {camelCaseToTitleCase(params.gameId)}
        </h1>
      </header>
      <div className="flex max-w-screen-xl px-8 w-full items-center">
        <WaWGamePage paramsId={params.gameId} />
      </div>
    </section>
  );
}

export default page;
