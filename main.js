const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]; 
function makediv(content){
    div = document.createElement("div")
    div.textContent = content
    document.body.appendChild(div)
}
// Kata number 1
for (let i = 0; i <= 20; i++) {
    makediv(i)
}
// Kata number 2
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0){
    makediv(i)
    }
}

// Kata number 3
for (i = 0; i < 20; i++) {
    if (i % 2 == 1) {
    makediv(i)
    }
}

// Kata number 4
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0){
    makediv(i)
    }
}

// Kata number 5
for (i = 1; i <= 100; i++) {
    var y = i*i
    if (y < 101)
    makediv(y)
}

// Kata number 6
for (i = 20; i >= 1; i--)
makediv(i)
// Kata number 7
for (i = 20; i >=2; i--) {
   if (i % 2 == 0)
   makediv(i)
}

// Kata number 8
for (i = 20; i >= 1; i--){
    if (i % 2 == 1) 
    makediv(i)
}

// Kata number 9
for (i = 100; i >=5; i--) {
    if (i % 5 == 0)
    makediv(i)
}

// Kata number 10
for (i = 100; i >= 1; i--){
    var y = i * i
    if (y <= 100)
    makediv(y)
}
// Kata number 11
{let i = sampleArray.toString();
makediv(i)
}
// Kata number 12
    for(i = 0; i < sampleArray.length; i++){
    if (sampleArray[i] % 2 == 0){
    makediv(sampleArray[i])
    }
}
// Kata number 13
for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 == 1) {
    makediv(sampleArray[i])
    }
    }
// Kata number 14
for (i = 0; i < sampleArray.length; i++) {
    let y = (sampleArray[i]*sampleArray[i])
    makediv(y)
}
// Kata number 15
{const twentyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0
for(i = 0; i < twentyArray.length; i++){
    sum += twentyArray[i]
}
makediv(sum)
}
// Kata number 16
{let sum = 0
for(i = 0; i < sampleArray.length; i++){
    sum += sampleArray[i]
}
makediv(sum)
}
// Kata number 17
makediv(Math.min(...sampleArray))
// Kata number 18
makediv(Math.max(...sampleArray))
// Kata number 19
