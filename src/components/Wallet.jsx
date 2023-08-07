import { normalizeWalletAddress } from "../utils/normalizeWalletAddress"







const Wallet = ({ wallet }) => {
  return (
    <p className="h-12 px-4 py-3 bg-white text-violet text-lg w-fit rounded-md font-red_hat font-bold">{normalizeWalletAddress(wallet)}</p>
  )
}

export default Wallet