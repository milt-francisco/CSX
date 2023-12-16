# CSX Challenge: Inventory / Challenge: Chain Stores

Challenge: Inventory
Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.
\n
\n
Challenge: Chain Stores \n
Declare a class Chain that creates a new instance of a Chain object when invoked with the new keyword. Each Chain object should have a name property, a totalStores property, and a locations property. The name property will be assigned to a string which is passed in as an argument when calling the Chain function. The totalStores property should be initialized to 0 and the locations property set to an array representing all the existing franchises of that chain store. When a new object is initiated, the locations array should be empty.

Declare another class Franchise that creates a new instance of a Franchise object when invoked with the new keyword. Each Franchise object should have an owner property and a city property, both of which will be set equal to strings passed in as arguments to the constructor.

All instances of your Chain class must also have access to two methods that are stored on the class's prototype:

The first method, openStore, should take in 2 strings as arguments. Those strings should be passed into a new instance of a Franchise object as the arguments for the owner and city properties. The new instance of Franchise should be added to the locations array which belongs to the Chain instance the method was called on. The totalStores property should also be updated accordingly.

The second method, closeStore, should take a single string as an argument. It should check to see if there is an instance of a Franchise with a city property that matches the input string in the locations array on the instance of Chain the method was called on. If so, it should remove the instance from the locations array, update the totalStores property and display the string 'name closed the store in city!' If not, log the string 'name doesn't have a store in city.'
