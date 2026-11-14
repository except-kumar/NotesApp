

type AllNotesProps = {
  NoteDetails: {
    id: number;
    title: string;
    content: string;
    isFavorite:boolean;
    isDeleted:boolean;
    isArchived:boolean
  };

  onDelete:(NoteID:number)=>void
  toggleFavorite:(noteID:number)=>void
  addToArchive:(noteID:number)=>void
};

const AllNotes = ({ NoteDetails,onDelete,toggleFavorite,addToArchive }: AllNotesProps) => {



  return (
    <div className="group relative text-[#dff1d7] bg-[#779b7f] flex flex-col items-start gap-3 px-4 py-3 w-[18%] h-full min-h-0 overflow-hidden hover:scale-105 transition-all ease-initial rounded-2xl hover:shadow-xl">

      <div className="relative flex items-center justify-between gap-2 w-full min-w-0">

        <h1 className="text-[22px] text-[#013237] font-semibold line-clamp-1 min-w-0">
          {NoteDetails.title}
        </h1>



        <button
          type="button"
          onClick={() =>
            
              toggleFavorite(NoteDetails.id)
          }
          aria-label={NoteDetails.isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="relative shrink-0 w-7 h-7"
        >
          <i
            className={`absolute inset-0 flex items-center justify-center text-[22px] transition-all duration-200 group-hover:opacity-100 ${
              NoteDetails.isFavorite
                ? "ri-heart-fill text-[#dbf0d2] scale-110 opacity-100"
                : "ri-heart-line opacity-0 group-hover:opacity-100"
            }`}
          />




        </button>
      </div>





      <p className="line-clamp-3 w-full min-w-0 wrap-break-word font-['Plus_Jakarta_Sans'] ">
        {NoteDetails.content}
      </p>

      <div className="mt-auto flex items-center justify-between gap-5 px-1 w-full shrink-0">
        <button type="button" aria-label="Edit note" className="hover:scale-115 transition-all">
          <i className="text-[19px] transition-transform  opacity-0 group-hover:opacity-100 ri-pencil-ai-2-line" />
        </button>

        <button type="button" aria-label="Change note color" className="hover:scale-115 transition-all">
          <i className="text-[19px] transition-transform hover:scale-115 opacity-0 group-hover:opacity-100 ri-palette-line" />
        </button>

        <button onClick={()=>
          
          
          {addToArchive(NoteDetails.id)

          }} type="button" aria-label="Archive note" className="hover:scale-115 transition-all">
          <i className="text-[19px] transition-transform hover:scale-115 opacity-0 group-hover:opacity-100 ri-archive-line" />
        </button>

        <button type="button" aria-label="Delete note" className="hover:scale-115 transition-all"

            onClick={()=>{
              
              onDelete(NoteDetails.id)

            }}
        
        >
          <i className={`text-[19px] transition-transform hover:scale-115 opacity-0 group-hover:opacity-100 ri-delete-bin-4-line hover:text-red-700`} />
        </button>
      </div>

    </div>
  );
};

export default AllNotes;

