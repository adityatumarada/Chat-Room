import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';


export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  function myFuntion1() {
    const container1 = document.getElementById('container1');

   
        container1.classList.remove("right-panel-active");
  }

  function myFuntion2() {
    const container1 = document.getElementById('container1');

        container1.classList.add("right-panel-active");

  }
    
  return (
<div class="container1" id="container1">
	<div class="form-container1 sign-up-container1">
		<form id="form1" action="#">
			<h1>Create Room</h1>
            <input placeholder=" User name" className="form-control" type="text" onChange={(event) => {setName(event.target.value); setRoom(Math.floor(100000 + Math.random() * 900000));} }/>
			<Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button id="button">Create Room</button>
            </Link>
		</form>
	</div>
	<div class="form-container1 sign-in-container1">
		<form id="form1" action="#">
			<h1>Join Room</h1>
			<input placeholder="User name" className="form-control" type="text" onChange={(event) => setName(event.target.value) }/>
			<input placeholder="Room ID" className="form-control" type="text" onChange={(event) => setRoom(event.target.value)} />
			<Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button>Join Room</button>
            </Link>
		</form>
	</div>
    
	<div class="overlay-container1">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>Enter your name to create your chat room.</p>
				<button class="ghost" id="signIn" onClick={myFuntion1}>Create Room</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your details and start chatting with your friends.</p>
				<button class="ghost" id="signUp" onClick={myFuntion2}>Create Room</button>
			</div>
		</div>
	</div>
</div>

  );
}
