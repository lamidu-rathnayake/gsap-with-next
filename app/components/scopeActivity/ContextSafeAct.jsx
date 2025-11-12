'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import styles from "./ContextSafeAct.module.css";

gsap.registerPlugin(useGSAP);

export default function ScopeAnimation(){
    const [count, setCount] = useState(0);
    
    const container = useRef(); 
    // creating gsap context object 
    // i enable revertOnUpdate to clean the animation when count is changed
    const {contextSafe} = useGSAP({dependencies: [count],scope: container , revertOnUpdate : true});

    // creating onclick function with gsap context safe 
    const onClickCircle = contextSafe(()=>{
        gsap.to('.circle', {rotation: "+=150", duration: 0.3});
    });

    return(
        <div className={styles.wraper}>
            <div className={styles.container} ref={container}>
                {/* adding the context safe function to the click event */}
                <button onClick={onClickCircle}>click here</button>
                
                {/* changing the count to check whether it cleans the animation */}
                <button onClick={()=>{
                    setCount((prev)=>{
                        setCount(prev+1);
                    });
                }}>click here</button>
                
                <div className={`circle ${styles.circle} bg-green-400`}><p>circle</p></div>
            </div>
        </div>
    );
}
