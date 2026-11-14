import Calender from "./Calender"
import Greet from "./Greet"
import MyNotes from "./MyNotes"


type ElementsProps = {
    EditorOpen:(value:boolean)=>void
    onClickToNoteEditor:(value:boolean)=>void

    NoteList:{
      id:number,
      title:string,
      content:string,
      isFavorite:boolean,
      isDeleted:boolean,
      isArchived:boolean
    }[]

    deleteNote:(NoteID:number)=>void

    toggleFavorite:(noteID:number)=>void

    addToArchive:(noteID:number)=>void

    handleWorks:(work:string)=>void

    workList:{
      id:number,
      Work:string,
      isDeleted:boolean
    }[]

    deleteWorks:(workID:number)=>void
}

const Elements = ({EditorOpen,NoteList,deleteNote,toggleFavorite,addToArchive,onClickToNoteEditor,handleWorks,workList,deleteWorks}:ElementsProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">

      <div className="w-full h-[30%] flex justify-between gap-1 px-1 ">
        <Greet/>
        <Calender/>
      </div>
      
      <MyNotes
      deleteNote={deleteNote}
      NoteList={NoteList}
      EditorOpen = {EditorOpen}
      toggleFavorite = {toggleFavorite}
      addToArchive = {addToArchive}
      onClickToNoteEditor={onClickToNoteEditor}
      handleWorks = {handleWorks}
      workList = {workList}
      deleteWorks = {deleteWorks}
      />
    </div>
  )
}

export default Elements
