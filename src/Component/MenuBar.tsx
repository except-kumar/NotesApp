
type props = {
  noteList:{
    id:number
    title:string
    content:string
    isFavorite:boolean
    isDeleted:boolean
    isArchived:boolean
  }[]
}



const MenuBar = ({noteList}:props) => {



const favoriteCount = noteList.filter((note)=>note.isFavorite).length
const deletedCount = noteList.filter(
  (note) => note.isDeleted
).length;
const archivedCount = noteList.filter((note)=>note.isArchived).length

// const deleteInfo = noteList.filter((note)=>note.isDeleted)
// console.log(deleteInfo);


  return (
    <div className="w-full h-[80%] px-2 flex flex-col items-center justify-center gap-10 ">

        <button className="text-[17px] hover:bg-[#bddec4] w-full rounded-[5px] flex items-center justify-between  px-6 py-1 transition-all ease-in-out ">All 

      <div className="text-[15px]">
        {noteList.length}
      </div>

        </button>
        <button className="text-[17px] hover:bg-[#bddec4] w-full rounded-[5px] flex items-center justify-between  px-6 py-1 transition-all ease-in-out ">General

        <div className="text-[15px]">
          {noteList.length}
        </div>

        </button>
        <button className="text-[17px] hover:bg-[#bddec4] px-6 py-1 w-full rounded-[5px] flex items-center justify-between  transition-all ease-in-out ">Favorites 

          <div className="text-[15px]">
            {favoriteCount}
          </div>

        </button>
        <button className="text-[17px] hover:bg-[#bddec4] px-6 py-1 w-full rounded-[5px] flex items-center justify-between  transition-all ease-in-out ">Archived

          <div className="text-[15px]">
            {archivedCount}
          </div>

        </button>
        <button className="text-[17px] hover:bg-[#bddec4] px-6 py-1 w-full rounded-[5px] flex items-center justify-between  transition-all ease-in-out ">Recently Deleted 

        <div className="text-[15px]">
           {deletedCount}
        </div>

        </button>
    </div>
  )
}

export default MenuBar
