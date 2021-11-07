// type alias

type Uid = number | string | undefined

let plataform: Uid

plataform = 'hello' // Using number or string or undefined

// type alias com intersection

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 1,
    name: 'willian'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "willjusten",
    level: 100
}

type PlayerInfo = AccountInfo & CharInfo // interseção (juntar os dois types)

