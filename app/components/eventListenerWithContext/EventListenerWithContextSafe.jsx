'use client'; //animations must be in client components

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function BoxRotate(){
    const container = useRef();
    const badRef = useRef();
    const goodRef = useRef();

    useGSAP((context, contextSafe)=>{
        gsap.to(goodRef.current, {x: 100});


        // click event function + context sefe
        // creating the on click function with context safe 
        const OnclickGood = contextSafe(()=>{
            gsap.to(goodRef.current, {
                rotation: '+=180',
            });
        });

        
        // putting the context safe function to the event listener
        goodRef.current.addEventListener('click', OnclickGood);



        // cleaning the event listener and the function
        return ()=>{
            goodRef.current.removeEventListenre('click', OnclickGood);
        };

    }, {scope: container});


    return(
        <div className="container" ref={container}>
            <button ref={badRef}>bad button</button>
            <button ref={goodRef}>good button</button>
        </div>
    );
}