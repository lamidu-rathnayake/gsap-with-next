## this is the list that i cover in this repository

1. i learned how the useGSAP() hook works roughly. and its attributes such as,
    
    useGSAP(
        (context, contextSafe) => {
            // 🧠 GSAP code goes here
        },
        {
            scope,              // ref or selector scope
            dependencies,       // re-run list
            revertOnUpdate,     // revert animations when dependencies change
            defaults,           // default GSAP values
            killOnUnmount,      // auto-kill animations when component unmounts
        }
    );


2. how to use scope attribute in dependancy array
3. revertOnUpdate