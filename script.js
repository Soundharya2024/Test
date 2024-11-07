document.querySelector("#grandparent").addEventListener("click", 
    (e) => {
        console.log("GP Clicked!");
    },
);

document.querySelector("#parent").addEventListener("click", 
    (e) => {
        console.log("Parent Clicked!");
        e.stopPropagation();
    },
);

document.querySelector("#child").addEventListener("click", 
    (e) => {
        console.log("Child Clicked!");
    },
true);