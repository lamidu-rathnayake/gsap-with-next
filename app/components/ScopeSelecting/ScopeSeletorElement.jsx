'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import styles from './style.module.css';

gsap.registerPlugin(useGSAP);

export default function(){
    const container = useRef();

    useGSAP(()=>{
        gsap.from(".box", {
            opacity: 0, 
            stagger:0.1,
            duration: 1
        });
    },{scope: container});

    return (
        <div ref={container} className={styles.container}>
            <div className={`box ${styles.box}`}></div>
            <div className={`box ${styles.box}`}></div>
            <div className={`box ${styles.box}`}></div>
            <div className={`box ${styles.box}`}></div> 
        </div>
    );
}

