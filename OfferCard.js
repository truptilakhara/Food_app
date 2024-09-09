import { CDN_URL } from "../utils/constant";

const OfferCard = ({ offerInfo }) => {
  const { header, couponCode, expiryTime, offerLogo } = offerInfo?.info;
  return (
    <div className="mt-7 ml-5 p-5 min-w-[420px] border-2 rounded-3xl flex items-center">
      <img
        src={CDN_URL + offerLogo}
        alt="offer-logo"
        className="h-[50px]"
      ></img>
      <ul className="pl-5">
        <li className="text-xl font-bold">{header}</li>
        {couponCode ? (
          <li className="font-bold text-gray-400 text-lg">{couponCode}</li>
        ) : (
          <li className="font-boldtext-gray-400 text-lg">{expiryTime}</li>
        )}
      </ul>
    </div>
  );
};

export default OfferCard;
