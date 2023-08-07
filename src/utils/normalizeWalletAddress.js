





export function normalizeWalletAddress(wallet) {

    if (!wallet) return

    return wallet.slice(0,8) + "..." + wallet.slice(38, wallet.length)
}