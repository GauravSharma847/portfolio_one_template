import "./topbar.scss"
import Person from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
// import { NavLink} from 'react-router-dom';
// import { Person, Email } from "material-ui"
export default function Topbar({menuOpen, setMenuOpen}) {
  // const navigate = useNavigate();

  // const LinkedIn = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/linkedin.com/in/gaurav8417');
  // };
  return (
    <div className = {"topbar " + (menuOpen && "active")}>       {/* i added active class so that when pointer is clicked it changes color to mainColor*/ }
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logoGS.png" alt="" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8417887516</span>
          </div>
          <div className="itemContainer">
            <Email className = "icon"/>
            <span>gauravsharma8417@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" onClick={() => alert('clicked')} />
            {/* <a href="https://linkedin.com/in/gaurav8417">linkedin.com/in/gaurav8417</a> */}
            <span>
            linkedin.com/in/gaurav8417</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" onClick={()=>{alert('clicked')}} />
            <span>github.com/GauravSharma847</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        
      </div>

    </div>
  )
}
