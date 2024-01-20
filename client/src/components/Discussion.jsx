import { NavLink } from 'react-router-dom'
import Picture from "../components/Picture"

const Discussion = (props) => {
  return(

   <NavLink to="/messages">
   <li className="flex  my-1 hover:bg-white w-full ">
      <button
      className="text-xl bg-slate-300 hover:bg-blue-800 text-white flex justify-center items-center h-24 w-4"
      onClick={()=>props.delete(props.info.id)} >
      x
      </button>
      <div className="h-24 w-24 border overflow-hidden">
      <img src={props.info.profilePicture} alt=""
      className="object-cover h-full w-full" />
      </div>

      <div className="flex flex-col   ">
        <h5 className="text-blue-800 text-xl font-bold capitalize p-0 m-0">{props.info.userName}{""}
        </h5>


      </div>
    </li>
    </NavLink>
    )
}

export default Discussion




