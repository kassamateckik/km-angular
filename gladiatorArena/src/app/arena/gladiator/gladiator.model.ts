export interface Gladiator{
    id:number,
    nev:string, 
    hp:number,
    tamadas:number,
    maxHp:number
}

export interface Eredmeny{
    gyoztes:Gladiator|undefined,
    vesztes:Gladiator|undefined, 
    tulel:boolean
}