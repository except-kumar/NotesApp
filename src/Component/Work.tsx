



  type worklistProps = {
    workList:{
      id:number,
      Work:string,
      isDeleted:boolean
    }

    onDelete:(workID:number)=>void

  }


const Work = ({workList,onDelete}:worklistProps) => {



  return (
    <div className="h-12.5 w-full flex flex-col gap-2  ">
        
        <div className="h-full w-full flex gap-6 items-center font-[DM_Sans] group  px-5 bg-[#779b7f] ">

        
        
        <button
          type="button"

          onClick={()=>{
              onDelete(workList.id)
          }}
         
          aria-label={workList.isDeleted ? "Remove from favorites" : "Add to favorites"}
          className="relative shrink-0 w-7 h-7"
        >
          <i
            className={`absolute inset-0 flex items-center justify-center text-[22px] transition-all duration-200 group-hover:opacity-100 ${
              workList.isDeleted
                ? "ri-checkbox-blank-circle-fill text-[#dbf0d2] scale-110 opacity-100"
                : "ri-checkbox-blank-circle-line opacity-0 group-hover:opacity-100"
            }`}
          />
        </button>




          <h1 className="text-[17px] text-[#dbf0d2] font-normal ">{workList.Work}</h1>

        </div>

    </div>
  )
}

export default Work
