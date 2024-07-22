import React from "react";

function page() {
  return (
    <section className="flex w-full bg-gray-900 justify-center min-h-screen flex-col items-center">
      <header className="flex max-w-screen-xl w-full mt-12 items-center">
        <h1 className="md:text-5xl text-4xl mx-auto font-bold">About</h1>
      </header>
      <div className="px-4 gap-x-8">
        <h2 className="text-2xl pt-8 pb-2 text-[gray] text-center">
          This is not a Treyarch website. This is a fan made opinated website.
          All rights belong to treyarch and activision.
        </h2>
        <p className="text-light font-[200] text-center text-wrap">
          I hope you all enjoy my ranking system. This is all just my own
          subjected opinion. If you have any ideas or suggestions, let me know.
          I think we covered a lot, but I would still like to cover guns, power
          ups, characters, and more. Have a great day!
        </p>
      </div>
    </section>
  );
}

export default page;
