'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function StaggerBoxes(){
    const container = useRef();

    useGSAP(()=>{
        gsap.to('.stagger-box', {
            y: 400,  
            rotation: 360,
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 1.5,
                grid: [2,1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        });  
    },{scope: container});


    return(<div className='flex gap-3' ref={container}>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
        <div className="stagger-box w-10 h-10 bg-amber-300"></div>
    </div>);
}