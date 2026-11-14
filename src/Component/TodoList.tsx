import Work from "./Work"



type TodoProps = {
      onClickToNoteEditor:(value:boolean)=>void
      workList:{
        id:number,
        Work:string,
        isDeleted:boolean
      }[]
      deleteWorks:(workID:number)=>void

}

const TodoList = ({onClickToNoteEditor,workList,deleteWorks}:TodoProps) => {



  return (
    <div className="w-[80%] h-full flex flex-col gap-2 px-7 py-3 bg-[#c3e0c5] rounded-2xl overflow-hidden ">

<div className="w-full h-[20%] flex justify-between ">
        <h1 className="text-2xl font-[Inter] font-medium ">Today's Work</h1>

        <button onClick={()=>{
          onClickToNoteEditor(true)
        }}  className="bg-[#ecfaed] font-medium px-2 rounded-sm active:scale-95  ">
          Add Work 
        </button>
</div>


<div className="flex flex-col gap-2 max-h-42.5 overflow-y-auto">
       
       {workList.filter((work)=> !work.isDeleted).map((e)=>(
        <Work 
        workList ={e} key={e.id}
        onDelete={deleteWorks}
        />
       ))}
</div>
    

</div>
  )
}

export default TodoList
