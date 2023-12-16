class Chain {
	constructor(name) {
    this.name = name;
    this.totalStores = 0;
    this.locations = [];
  }
  
  	openStore(owner, city) {
    let store = new Franchise(owner, city);
    this.locations.push(store);
    this.totalStores++;
  }
		closeStore(store) {
      for (let i = 0; i < this.locations.length; i++) {
      	if(this.locations[i].city === store) {
          this.locations.splice(i, 1);
          this.totalStores--;
          return console.log(`${this.name} closed the store in ${store}!`)
        } 
      }
      return console.log(`${this.name} doesn't have a store in ${store}.`)
    }
}

class Franchise {
  	constructor (owner, city) {
      this.owner = owner;
      this.city = city;
    }
}

const buenoBell = new Chain('Bueno Bell');
// Uncomment these lines to check your work!
buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner) //should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'