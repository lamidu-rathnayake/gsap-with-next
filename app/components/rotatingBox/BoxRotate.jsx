'use client'; //animations must be in client components

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import styles from "./BoxRotate.module.css";
import { useState } from 'react';

gsap.registerPlugin(useGSAP);

export default function BoxRotate(){
	const container = useRef();
	const circle = useRef();
	const [number, setNumber] = useState(0);
	const [isTurned, setIsTurned] = useState(false);

	const randnumHandler = () => {
		isTurned ? 
		setNumber((prev)=>{
			setIsTurned(false);
			let num = -500; 
			console.log(num);
			return num;	
		}):
		setNumber((prev)=>{
			setIsTurned(true);
			let num = 500; 
			console.log(num);
			return num;
		})
	}

	useGSAP( 
		()=>{
			// using selectors
			gsap.to(".box1", {
				rotation: number,	
				duration: 1,
			});

			gsap.to(".box2", {
				rotation: -number,	
				duration: 1,
			});
		},
		{dependencies:[number],scope: container}
	)

	return(
		<div className='App'>
			<div className={`${styles.container}`} ref={container}>
				<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={randnumHandler}	>
					make box ratate
				</button>
 				<div className= {`box1 ${styles.box} bg-green-400`}> selector </div>
 				<div className= {`box2 ${styles.box} bg-green-400`}> selector </div>
			</div>    
		</div>
	)
}


