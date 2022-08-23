import BuyParticipation from './buyPar'
import Menu from './headerMenu'
import Search from './search'
import SignUp from './signUp'
import './style.css' 
export default function Header(){
    return(
        <div id="headerParts">
            <div className='right'>
                <h1>نماوا</h1>
                <Menu/>
            </div>
            <div className="left">
                <Search/>
                <BuyParticipation/>
                <SignUp/>
            </div>
        </div>
    )
}