import { Producto } from "./modelo"

export let inventario : Producto[] = [
    {
    id : 1,
    nombre : "plátano",
    categoria : "fruta",
    cantidad : 58,
    precio : 0.85,
    },
    {
    id : 2,
    nombre : "leche de soja",
    categoria : "productos Bio",
    cantidad : 87,
    precio : 1.45,
    },
    {
    id : 3,
    nombre : "kiwi",
    categoria : "fruta",
    cantidad : 124,
    precio : 0.59,
    },
    {
    id : 4,
    nombre : "Te Chai",
    categoria : "infusiones",
    cantidad : 44,
    precio : 2.65,
    },
]

export const fresas : Producto = {
    id : 5,
    nombre : "fresa",
    categoria : "fruta",
    cantidad : 0,
    precio : 0.47,
}

export const tila : Producto= {
    id : 6,
    nombre : "tila",
    categoria : "infusiones",
    cantidad : 21,
    precio : 0.16
}
