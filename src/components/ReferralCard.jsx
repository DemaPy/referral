import Currency from "./ui/Currency";

const ReferralCard = ({ children, color, text }) => {
  return (
    <div className={`max-w-[352px] w-full rounded-lg p-4 uppercase text-[28px] font-bold font-syncopate ${color}`}>
      <p
        className="text-left leading-8 tracking-tighter mb-4 whitespace-normal"
      >
        {text}
      </p>
      {children}
    </div>
  );
};


function referrals({ children, data, ...props }) {
    return <ReferralCard {...props} ><p className="text-right leading-none">{data}</p></ReferralCard>
}

function bonus({ children, data, ...props }) {
    return <ReferralCard {...props} >
      <div className="flex items-center justify-end gap-3 h-fit">
        <p className="text-right text-2xl leading-none">{data}</p>
        <Currency.Euro />
      </div>
      </ReferralCard>
}

ReferralCard.referrals = referrals
ReferralCard.bonus = bonus


export default ReferralCard