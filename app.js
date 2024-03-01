// Telephone class: Subject
class Telephone {
  constructor() {
    this.phoneNumbers = new Set()
    this.observers = new Set()
  }

  // Observer methods
  addObserver(observer) {
    this.observers.add(observer)
  }

  removeObserver(observer) {
    this.observers.delete(observer)
  }

  // Phone number methods
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber)
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber)
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.observers.forEach((observer) => {
        observer.notify(phoneNumber)
      })
    } else {
      console.log("Phone number not available")
    }
  }
}

// Observers
class DisplayNumberObserver {
  notify(phoneNumber) {
    console.log(phoneNumber)
  }
}

class DialNumberObserver {
  notify(phoneNumber) {
    console.log(`Now Dialing ${phoneNumber}`)
  }
}

// New instance of Telephone
const telephone = new Telephone()

// New instances of Observers
const displayNumberObserver = new DisplayNumberObserver()
const dialNumberObserver = new DialNumberObserver()

// Add observers to the Telephone Subject
telephone.addObserver(displayNumberObserver)
telephone.addObserver(dialNumberObserver)

// Add phone number to the Telephone Subject
telephone.addPhoneNumber("08120916565")

// Notify the Observers
telephone.dialPhoneNumber("08120916565")
