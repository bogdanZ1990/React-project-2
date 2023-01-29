import {NavLink} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/feather/user';
import {shoppingBag} from 'react-icons-kit/feather/shoppingBag'


export default function Navbar({numOfSubs, myOrderPrice}){

    return (
      <nav className="navBar">
          <NavLink to='/home/subs/hookandladder' className="logo">
            <img alt='firehouse logo' src='https://order.firehousesubs.com/assets/images/logo.png'/>
          </NavLink>
        <ul>
          <li>
            <NavLink to='/home/subs/hookandladder'>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/signin'><Icon icon={user} size={30}/>SIGN IN</NavLink>
          </li>
          <li>
            <NavLink to='/myorder'>
              <div className='nav_myorder'>
                <span><Icon icon={shoppingBag} size={30}/> MY ORDER {`(${numOfSubs})`}</span>
                <span>${myOrderPrice.toFixed(2)}</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}

