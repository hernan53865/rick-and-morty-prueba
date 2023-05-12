const random = (prop) => {
    let num = Math.floor(Math.random() * 826) + 1;
    return (num === prop) ? random(prop) : num;
}

export default random



