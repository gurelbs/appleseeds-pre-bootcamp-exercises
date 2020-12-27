let boom = () => {
    for (let i = 0; i <= 100; i++){
        if (i % 7 === 0 && i !== 0 || i.toString().includes(7)){
            console.log(`boom!`.toUpperCase());
        } else {
            console.log(i);
        }
    }
}

boom()
