import { useAppContext } from "../../hooks/useAppContext"











const Currency = ({ children, value }) => {

  const { setCurrency, currency } = useAppContext()

  return (
    <button onClick={() => setCurrency(value)} className={`py-[6.5px] rounded font-bold text-base px-[12.5px] leading-none ${currency === value ? "bg-white" : "bg-grey"}`}>{children}</button>
  )
}


function Euro() {
  return <Currency value="euro">€</Currency>
}

function Dollar() {
  return <Currency value="dollar">$</Currency>
}

Currency.Euro = Euro
Currency.Dollar = Dollar

export default Currency