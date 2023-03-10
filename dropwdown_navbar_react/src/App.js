import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { useState,react } from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    );
}

function Navbar(props)
{
  return(
<nav className='navbar'>
  <ul className='navbar-nav'>
    {props.children}
  </ul>
</nav>  )
}


function NavItem(props){
  const [open, setopen] = useState(false)

  return(
  <li className='nav-item'>
    <a href="#" className='icon-button' onClick={() => setopen(!open)}>
      {props.icon}
      </a>
      {open && props.children}
      
  </li>
  )
}


function DropdownMenu() {

  
}


export default App;
