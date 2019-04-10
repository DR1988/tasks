// diff between getTemplatedResponse ans getAnyResponse

type Res = {
  i: number,
  b: string,
  result: "SUCCES" | "ERROR",
  data: Array<string>
}

function getTemplatedResponse<T>(res: T): T {
  return res;
}

function getAnyResponse(res: any) {
  return res;
}

const response: Res = {
  b: 'a',
  i: 1,
  result: "SUCCES",
  data: ['a', 'c']
}


let result = getTemplatedResponse(response);
let res = getAnyResponse(response)

// ------------------------------------ //

class User<T> {
  private _id: T;

  constructor(id:T) {
      this._id=id;
  }

  getId(): T {
      return this._id;
  }
}

let tom = new User<number>(3);
console.log(tom.getId()); // возвращает number

let alice = new User<string>("vsf");
console.log(alice.getId()); // возвращает string

// --------------------- //

class Animal {
  protected name: string
  constructor(name: string){
    this.name = name
  } // could be written as => constructor(protected name: string){}

  giveVoice() {
    console.log('voice')
  }
}

class Dog extends Animal {
  constructor(name: string){
    super('zx') // why to call super
    this.name = name
  }
  Bark(){
    console.log('bark:')
  }

  giveVoice(){
    console.log('bark voice:', this.name)
  }
}

class Cat extends Animal{
  constructor(){
    super('zxc')
  }
  Meow(){
    console.log('Meow')
  }

  giveVoice(){
    console.log('meow voice')
  }
}

const arr1: Dog[] = [new Dog('a'), new Dog('a2')]
let arr2: Array<Animal> = arr1
arr2.push(new Cat())
arr2.forEach(a => a.giveVoice())
// arr1.forEach(a => a.Bark())

