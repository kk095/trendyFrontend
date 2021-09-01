import react,{useState} from 'react'
import './signup.scss'
import { TextField,Button } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default function Signup (){
    const url='http://127.0.0.1:8000/user'
    let [usr,setusr]=useState('')
    let [pass,setpass]=useState('')
    let [repass,setrepass]=useState('')
    let [email,setemail]=useState('')
    let [fname,setfname]=useState('')
    let [lname,setlname]=useState('')
    function setuser(e){
        if (e.target.name==='username'){
            setusr(e.target.value)
        }
        if (e.target.name==='fname'){
            setfname(e.target.value)
        }
        if (e.target.name==='lname'){
            setlname(e.target.value)
        }
        if (e.target.name==='email'){
            setemail(e.target.value)
        }
        if (e.target.name==='password'){
            setpass(e.target.value)
        }
        if (e.target.name==='repassword'){
            setrepass(e.target.value)
        }
    }

    function handlesub(e){
        e.preventDefault()

        axios.post(url,
            {
            "password": e.target.password.value,
            "first_name": e.target.fname.value,
            "username": e.target.username.value,
            "last_name": e.target.lname.value,
            "email": e.target.email.value
        }).then((res)=>{
            return res;
        }).catch((error)=>{
            if (error.response){
                Object.keys(error.response.data).map((key)=>{
                    console.log(key);
                    console.log(error.response.data[key]);
                    let ele=document.getElementById('m');
                    console.log(ele);
                    ele.innerText= error.response.data[key];
                    
                })
               
            }
        })

        setusr('')
        setpass('')
        setrepass('')
        setfname('')
        setlname('')
        setemail('')
    }
    return(
        <div className='signup-container'>
            <div className='signup'>
                <div className='signup-box1'>
                    <div className='title'>
                        SIGNUP
                    </div>
                    <div className='sub-title'>
                    Signup with email to get started
                    </div>
                    <div className='signupimg' style={{
                         background:` url('../img/signup.png') no-repeat center`,
                        backgroundSize:'contain'
                    }}>

                    </div>
                </div>
                <div className='signup-box2'>
                    <div className='signupForm'>
                    <form autoComplete="off" className='lform' onSubmit={handlesub}>
                        <div className='usr'>
                        <TextField id='username' label="Enter Your Username" fullWidth name ="username" value={usr} onChange={setuser} />
                        <div id='username'></div>
                        </div>
                        <div className='usr'>
                        <TextField id='email' label="Enter Your Email" fullWidth name ="email" value={email} onChange={setuser} />
                        <div id='m' class='error' style={{color:'red'}}></div>
                        </div>
                        <div className='usr'>
                        <TextField id='fname' label="Enter Your First Name" fullWidth name ="fname" value={fname} onChange={setuser} />
                        <div id='first_name'></div>
                        </div>
                        <div className='usr'>
                        <TextField id='lname' label="Enter Your Last Name" fullWidth name ="lname" value={lname} onChange={setuser} />
                        <div id='last_name'></div>
                        </div>
                        <div className='usr'>
                        <TextField id='password' type='password' label="Enter Your Password" fullWidth name ="password" value={pass} onChange={setuser} />
                        <div id='password'></div>
                        </div>
                        <div className='repass'>
                        <TextField id='repassword' type='password' label="Enter Your Password Again" fullWidth name="repassword" value={repass} onChange={setuser} />
                        </div>
                        <Button type="submit"  variant='contained' style={{
                            backgroundColor:'#FFEB0D',
                            color:'#2874F0',
                            letterSpacing:'1.5px',
                            fontWeight:'900',
                            fontSize:'20px'
                            }} fullWidth >
                            Signup
                        </Button>
                    </form>
                    </div>
                    <div className='oldcustom'>
                        Already a Customer? <NavLink to ='/login'>
                        <span style={{color:'#2874F0'}} >Login into your account</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}