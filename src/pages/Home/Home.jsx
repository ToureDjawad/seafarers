import { Logo } from "../../assets/Logo/Logo";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import Rectangle626 from "../../imgs/Rectangle 626.png";
import Group318 from "../../imgs/Group 318.png";
import Rectangle629 from "../../imgs/Rectangle 629.png";
import Group322 from "../../imgs/Group 322.png";
import Group323 from "../../imgs/Group 323.png";
import Unt from "../../imgs/Untitled-1 1.png";
import { Footer } from "../../components/Footer/Footer";
export function Home() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Logo src={Rectangle626} />
        <h1 className="text-8xl font-semibold ml-20  mt-[-8.6%]">
          <n className="text-white">Ecommerce</n>
          <br />
          shipping made easy.
        </h1>
      </div>
      <div className="w-[90%] m-auto bg-gray-500 h-[1px] mt-16"></div>
      <div className="flex space-x-20 w-[90%] m-auto pr-20 pl-20 pt-40 pb-40">
        <h1 className="text-6xl font-semibold">
          Logistic solutions <br /> for your business to <br /> solve any
          delivery <br />
          problems{" "}
        </h1>
        <div>
          <p class="pt-20">
            Australia#1ecommerce shipping solutions,
            <br />
            trosted by over 1 lac brands and enterprenur <br />
            for lowest shipping rates, widset reach and best <br /> customer
            service.{" "}
          </p>
          <PrimaryButton srcButton={Group318} className={"h-14 mt-5"} />
        </div>
      </div>
      <div className="bg-black w-[90%] m-auto mt-10 pb-20">
        <h1 class="text-center text-6xl font-semibold text-white pt-20 mb-40">
          Ecommerce service <br /> by easy shipping
        </h1>
        <div class="flex space-x-20 justify-center">
          <div>
            <h1 className="text-8xl font-semibold text-red-600">900K+</h1>
            <br />
            <p className="text-xl text-white text-center">Happy Sellers</p>
          </div>
          <div>
            <h1 className="text-8xl font-semibold text-red-600">2.8K+</h1>
            <br />
            <p className="text-xl text-white text-center">Shipments Daily</p>
          </div>
          <div>
            <h1 className="text-8xl font-semibold text-red-600">5.0K+</h1>
            <br />
            <p className="text-xl text-white text-center">Rating App</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-20 w-[90%] m-auto pr-20 pl-20 pt-40 pb-40">
        <h1 className="text-6xl font-semibold">
          We are #1logistic <br />
          worlwide
        </h1>
        <div>
          <p class="">
            Australia#1ecommerce shipping solutions,
            <br />
            trosted by over 1 lac brands and enterprenur <br />
            for lowest shipping rates, widset reach and best <br /> customer
            service.{" "}
          </p>

          <PrimaryButton srcButton={Group318} className={"h-14 mt-5"} />
        </div>
      </div>
      <div className="w-[90%] m-auto mb-20">
        <Logo src={Rectangle629} />
      </div>
      <div class="flex space-x-20 w-[90%] m-auto pr-20 pl-20 pt-40 pb-40">
        <h1 class="text-6xl font-semibold">
          Delivery of your package! <br />
          worlwide
        </h1>
        <div>
          <p className="">
            Australia#1ecommerce shipping solutions,
            <br />
            for lowest shipping rates, widset reach <br /> customer service.{" "}
          </p>
          <PrimaryButton srcButton={Group318} className={"h-14 mt-5"} />
        </div>
      </div>
      <div className="flex ml-[10%] space-x-10 w-[90%]">
        <div className="bg-red-600 h-[346px] w-[400px] mr-[2%]">
          <h1 className="text-white text-4xl font-semibold my-60 ml-6">
            worlwide <br />
            shipping
          </h1>
        </div>
        <div className="h-[600px] w-[400px] ">
          <Logo src={Group322} />
        </div>
        <div className="h-[600px] w-[420px]">
          <Logo src={Group323} />
        </div>
      </div>
      <div className="w-[90%] m-auto mb-20">
        <div className=" flex space-x-[30%]">
          <h1 className="text-6xl font-semibold">
            What do Sellers
            <br />
            Says
          </h1>
          <div>
            <p className="">
              Australia#1ecommerce shipping solutions,
              <br />
              trosted by over 1 lac brands and enterprenur <br />
              for lowest shipping rates, widset reach and best <br /> customer
              service.{" "}
            </p>
            <PrimaryButton srcButton={Group318} className={"h-14 mt-5"} />
          </div>
        </div>
      </div>
      <div className="flex ml-[10%] space-x-10 w-[90%] mb-10">
        <div className="bg-red-600 pr-8 pl-8">
          <div className="flex space-x-10">
            <Logo src={Unt} className={"h-64 mt-12"} />

            <div className="text-white mt-12">
              <p className="font-semibold text-xl">
                Shiprocket has made shipping <br /> easy for me. It is reliable
                and <br /> cost-effective shipping solutions.{" "}
              </p>
              <div>
                <p className="font-semibold text-xl">Noha Elipsey</p>
                <br />
                <p class="text-xl">CEO Hoomes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 pr-8 pl-8">
          <div className="flex space-x-10">
            <Logo src={Unt} className={"h-64 mt-12"} />

            <div className="mt-12">
              <p className="font-semibold text-xl">
                Shiprocket has made shipping <br /> easy for me. It is reliable
                and <br /> cost-effective shipping solutions.{" "}
              </p>
              <div>
                <p className="font-semibold text-xl">Noha Elipsey</p>
                <br />
                <p className="text-xl">CEO Hoomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
