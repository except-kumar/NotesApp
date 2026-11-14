
const Logo = () => {
  return (
    <div className="w-full h-[20%] flex flex-col leading-4 items-center justify-center  ">
       
       <div className="group h-[50%] w-[50%] flex flex-col items-center justify-center cursor-pointer ">
        <h1 className="text-4xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(1,50,55,0.6)] ">Keep</h1>
        <h1 className="text-[40px] font-['Birthstone'] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(1,50,55,0.6)] hover:text-[#ecfaed] ">Notes</h1>
      </div>

    </div>
  )
}

export default Logo
