const s  = 123234;


let split = s

try {
    split = s.split('').reverse().join('')
} catch (error) {
    
    console.log(error.message)
} finally{
    
    console.log(split)
}