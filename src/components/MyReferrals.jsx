import { useEffect, useState } from "react";
import ReferralBoard from "./ReferralBoard";
import ReferralCard from "./ReferralCard";
import Referral from "./Referral";
import { Pagination, PaginationItem } from "@mui/material";
import IRightArrow from "../assets/right.svg"
import ILeftArrow from "../assets/left.svg"

const MyReferrals = () => {
  const [referrals, setReferrals] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("src/mock_data/referrals.json")
      .then((response) => response.json())
      .then((data) => setReferrals(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="mb-12">
        <h2 className="font-syncopate text-5xl font-bold uppercase text-white">
          My Referrals
        </h2>
      </div>
      <div className="flex gap-5 mb-11">
        <ReferralCard.referrals
          color={"bg-green"}
          text={"Total references"}
          data={"10"}
        />
        <ReferralCard.bonus
          color={"bg-orange"}
          text={"Quarterly bonus"}
          data={"100"}
        />
      </div>
      <div>
        <ReferralBoard />
      </div>
      <div className="flex justify-center items-center py-[306px]">
        {referrals?.length > 0 ? (
          referrals.map((referral) => (
            <Referral key={referral.id} {...referral} />
          ))
        ) : (
          <p className="text-3xl font-red_hat font-semibold text-white">
            No referrals yet
          </p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          className="text-white!important"
          boundaryCount={1}
          defaultPage={1}
          siblingCount={0}
          count={10}
          size="large"
        />
      </div>
    </>
  );
};

export default MyReferrals;
