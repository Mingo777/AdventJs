function checkPart(part) {
    if (part === part.split("").reverse().join("")) return true
    return [...part].some((_, i) => {
        const word = [...part]
        word.splice(i, 1)
        return word.join("") === word.reverse().join("")
    })
}


console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));