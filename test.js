class Human {
  #word = 'my word'
  constructor(dob, sax) {
    this.dob = dob
    this.sax = sax
  }

  getSax() {
    
    return this.sax
  }

  getAge() {
    return new Date().getFullYear() - this.dob
  }
}

const h = new Human(1988, 'male')

class Woman extends Human {
  constructor(dob, character) {
    super(dob, 'female')

    this.character = character
  }

  getCharacter() {
    return this.character
  }

  // getAge() {
  //   return new Date().getFullYear() - 1 - this.dob
  // }
}

const w = new Woman(1991, 'goof')
console.log(w )