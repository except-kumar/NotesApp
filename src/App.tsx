import { useEffect, useState} from "react";
import Elements from "./Component/Elements"
import LogoandMenu from "./Component/LogoandMenu"
import NoteEditor from "./NoteEditor/NoteEditor";
import type { Note } from "./Types/types";
import ToDoNoteEditor from "./NoteEditor/ToDoNoteEditor";
import type { work } from "./Types/types";

const App = () => {


    
    const [todoIsEditorOn, setTodoIsEditorOn] = useState(false);
    const [isEditorON, setIsEditorON] = useState(false);

    const [noteList, setNoteList] = useState<Note[]>(()=>{
    const savedNotes = localStorage.getItem("notes")

      return savedNotes ? JSON.parse(savedNotes) : []
    });


    const [workList, setWorkList] = useState<work[]>(()=>{
    const savedWork = localStorage.getItem("works")

      return savedWork ? JSON.parse(savedWork):[]
    });


    
    function EditorOpen(value:boolean){
      setIsEditorON(value)
    }

    function todoEditorOpen(value:boolean){
      setTodoIsEditorOn(value)
    }







    function handleNotes (title:string,content:string){

      const notes:Note = {
        id:Date.now(),
        title:title,
        content:content,
        isFavorite:false,
        isDeleted:false,
        isArchived:false
      }

      setNoteList((prev)=>[...prev,notes])
      
    }



    function handleWorks (work:string){
      const works:work = {
        id:Date.now(),
        Work:work,
        isDeleted:false
      }


      setWorkList((prev)=>[works,...prev])

    }


    function deleteWorks (workID:number){
      setWorkList((prev)=>prev.map((work)=>work.id === workID?{...work,isDeleted:true}:work))
    }
    
    

    function deleteNote(noteID:number){
      
      setNoteList((prev)=>prev.map((note)=> note.id === noteID ? {...note,isDeleted: true}:note))

    }

      useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(noteList))
      },[noteList])

      useEffect(()=>{
        localStorage.setItem("works",JSON.stringify(workList))
      },[workList])



      function toggleFavorite(noteID:number){
        setNoteList((prev)=>
          prev.map((note)=> note.id === noteID ? {...note,isFavorite: !note.isFavorite }:note)
        )
      }
    

      function addToArchive (NoteID:number){
        setNoteList((prev)=>prev.map((note)=>note.id === NoteID?{...note,isArchived:true}:note))
      }


  return (
    <div className="h-screen w-full bg-[#ecfaed] font-[Inter] text-[#013237] flex items-center justify-center">
      

       <div className="border-green-800 border-3 h-screen w-[20%] ">
        <LogoandMenu noteList={noteList}/>
       </div>

        <div className=" border-green-800 border-3 h-screen w-[80%]">
          <Elements 
          
          deleteNote={deleteNote}
          NoteList = {noteList} 
          EditorOpen={EditorOpen}
          toggleFavorite = {toggleFavorite}
          addToArchive = {addToArchive}
          onClickToNoteEditor = {todoEditorOpen}
          handleWorks = {handleWorks}
          workList = {workList}
          deleteWorks = {deleteWorks}
          />
        </div>

        {isEditorON && <NoteEditor onSave={handleNotes}  onClose={()=> EditorOpen(false)}/>}
          
        {todoIsEditorOn && <ToDoNoteEditor onSave={handleWorks} onClose={()=>todoEditorOpen(false)} />}




    </div>
  )
}

export default App
