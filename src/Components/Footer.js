import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";

function Footer() {
  const color = useSelector(state => state.color.value)
  return (
    <div className="footer">
      <p style={{color}}>My Redux project footer</p>
    </div>
  );
}
export default Footer;
