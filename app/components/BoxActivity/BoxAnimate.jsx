"use client";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function(){
    const container = useRef();

    useGSAP(()=>{
        // GSAP TO METHOD
        // gsap.to('#box', {
        //     x: "500px",
        //     rotation: 360,
        //     repeat: -1,
        //     duration: 3,
        //     yoyo: true,
        //     ease: 'elastic',
        // });

        // GSAP FROM METHOD
        // gsap.from('#box', {
        //     x: "500px",
        //     rotation: 360,
        //     repeat: -1,
        //     duration: 3,
        //     yoyo: true,
        //     ease: 'elastic',
        // });

        // GSAP FROMTO METHOD
        gsap.fromTo('#box',{
            x: '0',
            rotation: '0',
            borderRadius: '0',
        },
        {
            x: "500px",
            rotation: 360,
            repeat: -1,
            duration: 3,
            yoyo: true,
            borderRadius: '100%',
            // ease: 'bounce.out',
        });


    },{});
    return <div ref={container} className="">
        <div id='box' className="size-18 rounded-md bg-radial-[at_25%_25%] from-blue-300 to-blue-700 to-75%"></div>
    </div>
}