class Farm {
    constructor(name) {
        this.name = name
    }
  }

  module.exports.Farm = Farm









  function Book(name, year) {
    this.name = name
    this.year = '(' + year + ')'
  }
  
  let j = 'jurgis'

  let myBook = new Book(j, 1991);

  console.log(myBook);