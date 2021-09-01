import './navbar.css'
import React, {useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { Button} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PolicyOutlinedIcon from '@material-ui/icons/PolicyOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


function FadeMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        
        {<AccountCircleIcon aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} 
        style={{
            color:'#FFEB0D',
            fontSize:'32px'
            }}/>}
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Hello,{props.user}</MenuItem>
          <MenuItem onClick={handleClose}>My Order</MenuItem>
          <NavLink to='/signup' activeClassName="activecls" ClassName="navlink" >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          </NavLink>
        </Menu>
      </div>
    );
  }



function Navbar(){
    let [cls, setclass]=useState('nav1')
    let [home, sethome]=useState('del')
    let [user,setuser]=useState('none')
    let [search,setsearch]=useState('')

    let srch=(e)=>{
        setsearch(e.target.value)
    }

    let plc=()=>{
        setclass('nav')
        setTimeout(()=>{
            sethome('hom')
        },1000)
    }

    let cancel=()=>{
        setclass('nav1')
    }

    let usr=()=>{
        setuser('Krishna')
    }
  
    return(
        <>
        <div className='navbar'>
            <div className="box-1" style={{
                background:` url('${process.env.PUBLIC_URL}/logo.png') no-repeat center`,
                backgroundSize:'contain'
            }}>
            </div>

            <div className="box-2">
                <div className='search'>
                    
                    <input placeholder='Search your product' onChange={srch}></input>
                    <SearchIcon className='search-svg' onClick={plc}/>
                    
                </div>

                <div className="notification">
                <NotificationsIcon style={{
                    width:'29px',
                    height:'29px'
                }} className='notification-svg' />
                </div>
                { user==='none' 
                ?
                <Link to='/login'>
                <div className="register">
                <Button size='small' endIcon={<AccountCircleIcon/>} onClick={usr} >Login</Button>
                </div> 
                </Link>
                :
               
               <FadeMenu user={user}/>
                }
                <div className="cart">
                <ShoppingCartIcon className='cart-svg' style={{
                    width:'30px',
                    height:'30px'
                }}/>
                </div>
                                                    
            </div>
        </div>

        <div className='navbar-ph'>
            <div className='box-ph1'>
                <div className='bar'>
                  <DehazeIcon style={{color:"#fff"}} fontSize="large" onClick={plc} />
                </div>
                <div className="logo" style={{
                background:` url('${process.env.PUBLIC_URL}/logo.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='group'>
                    <div className='notification-ph'>
                        <NotificationsIcon style={{color:'#fff'}}/>
                    </div>
                    <div className='cart-ph'>
                        <ShoppingCartIcon style={{color:'#fff',margin:'0 10px'}}/>
                    </div>
                </div>
            </div>
            <div className='box-ph2'>
                <input placeholder='Search your product'></input>  
                <SearchIcon className='search-ph-svg'/>
            </div>
        </div>
        <div className={cls}>
            <div className={home}>
                <div className='header'>
                    <div className='icons'>
                        <div className='home'>
                            
                            <h4 onClick={cancel} style={{cursor:'pointer'}}><HomeIcon className='h'/>Home</h4>
                        </div>
                        <div className="sm-logo" style={{
                            background:` url('${process.env.PUBLIC_URL}/logo.png') no-repeat center`,
                            backgroundSize:'contain'
                            }}>
                        </div>
                    </div>
                    <div className='user'>
                            <h2>HELLO KK</h2>
                    </div>
                </div>
                
                <div className='body'>
                    <div className='list'>
                            <ListOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>All Categories</span>
                    </div>
                    <div className='list'>
                            <LocalOfferOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>Offer Zone</span>
                    </div>
                    <hr></hr>
                    <div className='list'>
                            <ListAltOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>My Order</span>
                    </div>
                    <div className='list'>
                            <ShoppingCartOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>My Cart</span>
                    </div>
                    <div className='list'>
                            <AccountCircleOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>My Account</span>
                    </div>
                    <div className='list'>
                            <FavoriteBorderOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>My Wishlist</span>
                    </div>
                    <div className='list'>
                            <NotificationsActiveOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>My Notification</span>
                    </div>
                    <hr></hr>
                    <div className='list'>
                            <HelpOutlineOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>Help Center</span>
                    </div>
                    <div className='list ls'>
                            <PolicyOutlinedIcon className='i' style={{fontSize:'40px'}}/>
                            <span className='txt'>Legel Policy</span>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Navbar;