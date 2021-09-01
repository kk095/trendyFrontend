import react,{useState} from 'react'
import './login.scss'
import { TextField,Button } from '@material-ui/core'
import {NavLink} from 'react-router-dom'


export default function Login (){
    let [usr,setusr]=useState('')
    let [pass,setpass]=useState('')
    function setuser(e){
        setusr(e.target.value)
    }
    function setpas(e){
        setpass(e.target.value)
    }

    function handlesub(e){
        e.preventDefault()
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        setusr('')
        setpass('')
    }
    return(
        <div className='login-container'>
            <div className='login'>
                <div className='login-box1'>
                    <div className='title'>
                        LOGIN
                    </div>
                    <div className='sub-title'>
                    Get  access to your orders, Wishlist and Recommendations
                    </div>
                    <div className='loginimg' style={{
                         background:` url('../img/loginimg.png') no-repeat center`,
                        backgroundSize:'contain'
                    }}>

                    </div>
                </div>
                <div className='login-box2'>
                    <div className='loginForm'>
                    <form autoComplete="off" className='lform' onSubmit={handlesub}>
                        <div className='usr'>
                        <TextField id='username' label="Enter Your Username" fullWidth name ="username" value={usr} onChange={setuser} />
                        </div>
                        <div className='pass'>
                        <TextField id='password' type='password' label="Enter Your Password" fullWidth name="password" value={pass} onChange={setpas} />
                        <span className='forget'>Forget?</span>
                        </div>
                        <Button type="submit"  variant='contained' style={{
                            backgroundColor:'#FFEB0D',
                            color:'#2874F0',
                            letterSpacing:'1.5px',
                            fontWeight:'900',
                            fontSize:'20px'
                            }} fullWidth >
                            Login
                        </Button>
                    </form>
                    </div>
                    <div className='newcustom'>
                    New Customer? 
                        <NavLink to='/signup'>
                        <span style={{color:'#2874F0'}} >Create an account</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}