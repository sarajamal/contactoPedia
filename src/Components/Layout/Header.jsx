
import logo from '../../Images/logo192.png';


function Header() {
    return (
        <div className='pt-3 py-2' style={{borderBottom:"1px solid #777"}}>
            <img src={logo} style={{height:"35px" ,verticalAlign:"top"}} alt='img'></img>
            <span className='h2 pt-4 m-2 text-white-50'>Contactopedia</span>
        </div>
    )
       
   
}
export default Header;