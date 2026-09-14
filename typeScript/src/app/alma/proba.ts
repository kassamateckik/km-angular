var c:number|string = 5;

console.log(c);

function a():number{
    return 6;
}

c = a() + "";
console.log(c);

var tuple:[number, string] = [10, "alma"];
console.log(tuple[0]);
console.log(tuple[1]);

enum napok {
    hetfo = "király",
    kedd = "lovag",
    szerda = "cigány",
    esigytovabb = "lofasz"
}

console.log(napok.hetfo);
