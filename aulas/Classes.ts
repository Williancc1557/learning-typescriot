class UserAccountOne {
    readonly name: string;
    age: number;
    level: number;

    constructor (name: string, age: number, level: number) {
        this.name = name
        this.age = age
        this.level = level
    }

    teste (): void {
        console.log(`Tlgd? ${this.name}`)
        
    }

    get getlevel() {
        return this.name
    }
    
    set setlevel(level: number) {
        this.level = level
    }
}
const willian = new UserAccountOne('willian', 30, 1)
willian.setlevel = 499
console.log(willian.getlevel)
// private não consegue alterar, readonly só consegue ler, public pode fazer o que quiser, protected só pode chamar dentro da classe