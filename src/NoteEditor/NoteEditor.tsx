import { useState } from "react"

type noteEditorProps = {
    onClose: () =>void
    onSave:(title:string,content:string)=>void
   
}




const NoteEditor = ({onClose,onSave}:noteEditorProps) => {


        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");




  return (
    <div className="h-screen fixed inset-0 z-50 w-full  flex items-center justify-center bg-white/15 backdrop-blur-[20px] border border-white/30 shadow-2xl text-white">
        

<div className=" h-[60%] w-[60%] rounded-3xl bg-[#193a3c]/65 backdrop-blur-md border border-white/30 shadow-2xl text-white flex flex-col justify-between py-5 px-8 ">

    <div className="flex items-center justify-between">

        <h1 className="text-3xl ">Create Note</h1>
        <i className="text-4xl cursor-pointer ri-close-line"
                onClick={()=>{
                    onClose()
                }}></i> 
    </div>




<div className="flex flex-col gap-7">

        <input className="px-2 py-2 placeholder-gray-300 outline-none  rounded-2xl border-transparent transition-all duration-300 ease-in-out
           hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/10 hover:bg-white/15
           focus:-translate-y-0.5 focus:scale-[1.01] focus:shadow-lg focus:shadow-white/20 " type="text" placeholder="Title" value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} />   
        <input className="px-2 py-20 placeholder-gray-300 flex flex-col border-transparent outline-none rounded-2xl
        
        transition-all duration-300 ease-in-out
           hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/10 hover:bg-white/15
           focus:-translate-y-0.5 focus:scale-[1.01] focus:shadow-lg focus:shadow-white/20" type="text" placeholder="Content.." value={content} onChange={(e)=>{
            setContent(e.target.value)
        }} />

</div>


<div className="flex items-center justify-center ">
        <button className="bg-white/20 px-1 py-2 rounded-[5px] cursor-pointer active:scale-95  w-[20%]
        hover:bg-white/30 hover:scale-105 transition-all ease-in-out"
            onClick={()=>{
                if (!title.trim()&&!content.trim()) {
                    return
                }


                onSave(title,content)
                onClose()
                

                

            }}
        >Save Note</button>
</div>

</div>
    </div>
  )
}

export default NoteEditor
