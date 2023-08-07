import { useState } from "react";
import { getFlag } from "../utils/countriesFlags";

const Referral = ({ email, sum, date, bonus, subreferrals, country }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(subreferrals);
  return (
    <table cellPadding={0} cellSpacing={0} className="block mt-5">
      <tbody className="block">
        <tr className="flex justify-between items-center">
          <td>
            <table cellPadding={0} cellSpacing={0} className="block">
              <tr>
                <td>
                  <svg
                    onClick={() => setIsOpen(!isOpen)}
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={isOpen ? "M1.5 9L9.5 1L17.5 9" : "M17 1L9 9L1 1"}
                      stroke={isOpen ? "#ffffff" : "#5F5F60"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td onClick={() => setIsOpen(!isOpen)}  className="cursor-pointer px-2 max-w-[320px] font-red_hat text-lg text-white font-normal truncate">
                  {email}
                </td>
                <td>
                  <img width={"20px"} height={"20px"} src={getFlag(country)} alt="country flag" />
                </td>
              </tr>
            </table>
          </td>
          <td>
            <table cellPadding={0} cellSpacing={0} className="block">
              <tr className="flex justify-around">
                <td className="ps-14 font-red_hat text-lg text-grey font-normal">
                  {date}
                </td>
                <td className="ps-14 font-red_hat text-lg text-white font-normal">
                  {sum}
                </td>
                <td className="ps-14 pe-6 ms-4 font-red_hat text-lg text-white font-normal">
                  {bonus}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
      {isOpen && subreferrals?.length > 0 && (
        <table
          cellPadding={0}
          cellSpacing={0}
          className="block border-grey border-b border-t mt-5 py-5 ms-6"
        >
          <tbody className="flex flex-col gap-4">
            {subreferrals?.length > 0 &&
              subreferrals.map(({ email, sum, date, bonus, subreferrals }) => {
                return (
                  <tr className="flex justify-between items-center">
                    <td>
                      <table cellPadding={0} cellSpacing={0} className="block">
                        <tr>
                          <td className="ps-2 w-3/4 block font-red_hat text-lg text-grey font-normal truncate">
                            {email}
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <table cellPadding={0} cellSpacing={0} className="block">
                        <tr className="flex justify-around">
                          <td className="ps-14 font-red_hat text-lg text-grey font-normal">
                            {date}
                          </td>
                          <td className="ps-14 font-red_hat text-lg text-grey font-normal">
                            {sum}
                          </td>
                          <td className="ps-14 pe-6 ms-4 font-red_hat text-lg text-grey font-normal">
                            {bonus}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </table>
  );
};

export default Referral;
