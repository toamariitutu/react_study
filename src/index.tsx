const hoge = 'hoge'
const num: number = 1
alert(hoge + num)

const testFunc: (x: string) => void = x => {
  console.log(x)
}
testFunc('hoge')

const f2: (x: number) => number = x => x + 2

const a: number[] = [1, 2, 3, 4, 5, 6]
