






const Button = ({ children, px, py, rounded, text }) => {

  return (
    <button className={`font-syncopate w-full font-bold ${text} bg-violet text-white ${px} ${py} ${rounded}`}>{children}</button>
  )
}


function s({ children }) {

  return <Button text={"text-base"} py={"py-[12.5px]"} rounded={"rounded-[8px]"} >{children}</Button>
}

function xl({ children }) {

  return <Button text={"text-[22px]"} py={"py-[32px]"} rounded={"rounded-[12px]"} >{children}</Button>
}


Button.s = s

export default Button