var hash="";
var count = 1;
var n=3;
for (var x=1; x <= 7; x++){
    while (hash.length != count){
        hash += "#"
    }
    hash += "\n";
    count += n;
    n++;
}
console.log(hash);