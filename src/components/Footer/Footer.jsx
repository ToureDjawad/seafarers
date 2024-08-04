import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Group318 from "../../imgs/Group 318.png";
export function Footer() {
  return (
    <>
      <footer className="bg-black mt-40">
        <div className="flex space-x-[30%] w-[90%] m-auto pt-40 justify-center">
          <h1 className="text-white text-7xl font-semibold">
            <n class="text-red-600">Lest's</n> start with us in <br /> shipping
            your <n class="text-red-600">goods!</n>{" "}
          </h1>
          <div className="mt-6">
            <PrimaryButton srcButton={Group318} />
          </div>
        </div>
        <div className="flex space-x-40 w-[90%] m-auto mt-10 pb-10 pt-36 justify-center">
          <div>
            <h1 className="font-semibold text-2xl text-red-600">Seafarers</h1>
            <br />
            <div>
              <p className="font-sans text-xl text-white">
                Wemanage lead Logistic
                <br />
                for worlds multinationnal
                <br />
                campanies
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">Company</h1>
            <br />
            <div className="font-sans text-xl text-white">
              <a href="http://" class="hover:text-red-600">
                Home
              </a>
              <br />
              <a href="http://" class="hover:text-red-600">
                About Us
              </a>
              <br />
              <a href="http://" class="hover:text-red-600">
                Project
              </a>
              <br />
              <a href="http://" class="hover:text-red-600">
                Agents
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">Contact</h1>
            <br />
            <div className="font-sans text-xl text-white">
              <p>
                1498w Fluton ste , STE
                <br />
                2D Chicago,Il 63684.
              </p>
              <br />
              <a href="tel:+" className="hover:text-red-600">
                +229 565656565
              </a>
              <br />
              <a href="mailto:" className="hover:text-red-600">
                info@Seafarers.com
              </a>
            </div>
          </div>
          <div>
            <h1 class="font-semibold text-2xl text-white">Social</h1>
            <br />
            <div class="font-sans text-xl text-white">
              <a href="" className="hover:text-red-600">
                Facebook
              </a>
              <br />
              <a href="" className="hover:text-red-600">
                Instagram
              </a>
              <br />
              <a href="" className="hover:text-red-600">
                LinkedIn
              </a>
              <br />
              <a href="" className="hover:text-red-600">
                YouTube
              </a>
              <br />
              <a href="" className="hover:text-red-600">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="w-[90%] m-auto bg-gray-500 h-[1px] mt-16"></div>
        <div className="flex w-[90%] m-auto pt-10 pb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
            <p>2023 seafarers.All rigths reserved</p>
            <p>
              <a href="" className="hover:text-red-600">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="" className="hover:text-red-600">
                Terms & Conditions
              </a>{" "}
              |{" "}
              <a href="" className="hover:text-red-600">
                Cookies Policy{" "}
              </a>
              |
              <a href="" className="hover:text-red-600">
                Map
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="text-center py-4  mt-8">
          <p className="text-gray-600">
            2024 TOURE Djawad UI/UX Design and web designer
          </p>
        </div>
      </footer>
    </>
  );
}
