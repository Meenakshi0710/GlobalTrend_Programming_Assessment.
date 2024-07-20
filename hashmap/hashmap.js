//Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
    constructor() {
      this.map = {};
    }
  
    // Put method to add or update a key-value pair
    put(key, value) {
      this.map[key] = value;
    }
  
    // Get method to retrieve the value for a given key
    get(key) {
      return this.map.hasOwnProperty(key) ? this.map[key] : null;
    }
  
    // Remove method to delete a key-value pair by key
    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        delete this.map[key];
      }
    }
  }
  
  // Example usage:
  const hashMap = new HashMap();
  hashMap.put("name", "Alice");
  console.log(hashMap.get("name")); // Output: Alice
  hashMap.remove("name");
  console.log(hashMap.get("name"));