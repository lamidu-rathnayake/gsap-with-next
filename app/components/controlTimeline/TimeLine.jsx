'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function(){
    const container = useRef();
    
    const timeLine = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        // yoyo: true,
    });
    
    useGSAP(()=>{
        // first animation
        timeLine.to('#box', {
            x: 300,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        });
        
        // second animation
        timeLine.to('#box', {
            x: 0,
            y: 200,
            rotation: 360,
            borderRadius: '10%',
            duration: 2,
            ease: 'back.inOut'
        });

        // second animation
        timeLine.to('#box', {
            x: 0,
            y: 0,
            rotation: 360,
            borderRadius: '0%',
            duration: 2,
            ease: 'back.inOut'
        });
    },{scope: container});


    return(<div className='' ref={container}>
        {/* adding play pause button */}
        <button className="relative inline-flex items-center justify-center p-0.5 
            mb-32 overflow-hidden text-sm font-medium text-heading
            rounded-base group bg-gradient-to-br from-cyan-500 to-blue-500 
            group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
            focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" 

            // adding play pause functionality to the button
            onClick={()=>{
                timeLine.paused() ? timeLine.play() : timeLine.pause();
            }}
        >
            <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
            play/pause
            </span>
        </button>   

        <div id='box' className="size-18 rounded-md bg-radial-[at_25%_25%] from-blue-300 to-blue-700 to-75%"></div>
    </div>);
}                   