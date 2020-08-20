import React,{useEffect,useState} from 'react';
import './styles/Nav.css';

function Nav (){
	const [show,handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll",()=>{
			if(window.scrollY > 100){
				handleShow(true);
			}else{
				handleShow(false);
			}
		});
		return () =>{
			window.removeEventListener("scroll");
		};
	},[])
	return (
		<div className={`nav ${show && "nav__black"}`}>
		<img 
		className="nav__logo"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
		alt='Netflix Logo'
		/>
		<img 
		className="nav__avatar"
		src="https://uploads.scratch.mit.edu/users/avatars/1182/0844.png"
		alt='Avatar'
		/>
		</div>
		)
}

export default Nav;