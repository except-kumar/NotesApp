import Logo from "./Logo"
import MenuBar from "./MenuBar"

type props = {

noteList:{
  id:number
  title:string
  content:string
}[]

}
const LogoandMenu = ({noteList}:props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <Logo/>
      <MenuBar noteList={noteList} />
    </div>
  )
}

export default LogoandMenu
