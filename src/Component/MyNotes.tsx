import AllNotes from "./AllNotes"
import TodoList from "./TodoList"


type MyNoteProps = {
    EditorOpen:(value:boolean)=>void
    NoteList:{
      id:number,
      title:string,
      content:string,
      isFavorite:boolean,
      isDeleted:boolean,
      isArchived:boolean
    }[]

    workList:{
      id:number,
      Work:string,
      isDeleted:boolean
    }[]


    deleteNote:(NoteID:number)=>void
    toggleFavorite:(noteID:number)=>void
    addToArchive:(noteID:number)=>void
    onClickToNoteEditor:(value:boolean)=>void
    handleWorks:(works:string)=>void
    deleteWorks:(workID:number)=>void

  }

const MyNotes = ({EditorOpen,NoteList,workList,deleteNote,toggleFavorite,addToArchive,onClickToNoteEditor,deleteWorks}:MyNoteProps) => {



  return (
<div className="w-full h-[60%] flex flex-col items-center justify-center  ">

<div className="w-full h-[50%]  flex  px-1 gap-2 py-2 items-center justify-start ">

        <button className=" h-full w-[20%] rounded-2xl text-xl font-semibold font[Inter] bg-[#c3e0c5] "

          onClick={()=>{
            EditorOpen(true)
          }}

        >Create Note </button>


    
        <TodoList 
        onClickToNoteEditor={onClickToNoteEditor}
        workList = {workList}
        deleteWorks = {deleteWorks}
        />
  

      
       

</div>  


      <div className="w-full h-[50%]  flex px-8 gap-2 py-2 items-center justify-start cursor-pointer   ">

          {NoteList.filter((note)=> !note.isDeleted && !note.isArchived)
          .map((e)=>(
            <AllNotes onDelete={deleteNote}
             key={e.id} NoteDetails = {e}
             toggleFavorite = {toggleFavorite}
             addToArchive = {addToArchive}
             />
          ))}


      </div>

    </div>
  )
}

export default MyNotes
