// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// number (int, float, hex, binary)
let total: number
total = 1234

// array (type[])
let items: string[]
items = ['food', 'drugs', 'arms']

let values: Array<number>
values = [1, 2, 3, 4]

// enum

enum Colors {
    white = '#fff',
    black = '000'
}

// void (retorna nada) 

function logger():void {
    console.log('foo')
}

// null | undefined
type bla = string | undefined

// never (nunca vai retornar nada)
function error(): never {
    throw new Error("error")
}

// object (tudo sem ser tipo primitivo)

let cart: object;
cart = {
    key: "fi"
}