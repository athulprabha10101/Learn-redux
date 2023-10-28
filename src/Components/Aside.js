import { useSelector, useDispatch } from "react-redux";
import randomColor from "randomcolor";
import { colorSlice } from "../Redux/color/colorSlice";
import { changeColor } from "../Redux/color/colorSlice";

function Aside() {
  const color = useSelector(state => state.color.value)
  const dispatch = useDispatch()
  const change_Color = ()=>{
    dispatch(changeColor({
      color:randomColor()
    }))
  }

  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={change_Color}>Change Color</button>
    </div>
  );
}

export default Aside;
