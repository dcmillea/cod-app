import FrontPageImages from "../app/components/homePage/FrontPageImages";
import FrontPageMobile from "./components/homePage/FrontPageMobile";

export default function Home() {
  return (
    <div>
      <div className="md:flex hidden">
        <FrontPageImages />
      </div>
      <div className="md:hidden flex">
        <FrontPageMobile />
      </div>
    </div>
  );
}
