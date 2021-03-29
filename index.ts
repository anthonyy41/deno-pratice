function capitaliza(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice()
}

function hello(name: string): string {
    return 'hello' + capitaliza(name)

}

console.log(hello('test'))
