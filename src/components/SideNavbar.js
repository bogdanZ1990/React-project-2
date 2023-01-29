import { NavLink } from "react-router-dom"

export default function SideNavbar(){
    

    //  add classname to all navlink, style in css with active, hover

    
    return (
    <nav className="sideNavBar">
        <div>
            <h4>Welcome to Firehouse!</h4>
        </div>
        <ul className="menuNav">
            <li>
                <NavLink to='/home/subs/hookandladder'>SUBS
                    <ul className="menuSubs">
                        <li>
                            <NavLink to='/home/subs/hookandladder'>HOOK & LADDER®</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/subs/new'>NEW! PRIME RIB STEAK SUB</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/subs/dailysub'>DAILY MEDIUM SUB</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/subs/hotsubs'>HOT SPECIALTY SUBS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/subs/coldsubs'>COLD CUBS</NavLink>
                        </li>
                    </ul>
                </NavLink>
            </li>
            <li>
                <NavLink to='/home/salads'>SALADS</NavLink>
            </li>
            <li>
                <NavLink to='/home/drinks'>DRINKS</NavLink>
            </li>
            <li>
                <NavLink to='/home/kids'>KIDS' COMBOS</NavLink>
            </li>
        </ul>
    </nav>
    )
}