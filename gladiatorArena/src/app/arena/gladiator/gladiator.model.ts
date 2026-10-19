export interface Gladiator{
    id:number,
    nev:string, 
    hp:number,
    tamadas:number,
    maxHp:number,
    gyozelmek:number
}

export interface Eredmeny{
    gyoztes:Gladiator|undefined,
    vesztes:Gladiator|undefined, 
    tulel:boolean
}