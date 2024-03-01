# Learnable-week-9-task

> This repository contains the task for learnable week 9

### Telephone Class

- Has an add observer method and remove observer method.
- Also has add phonenumber, remove phonenumber and dail phone number methods.
- Dail phone number method calls the notify method in the observers.

---

### Observer Classes

- Has a notify method that can be called by the telephone class.

- First observer displays the phone number
- Second observer displays "Now dailing phone number"

---

### Accessing the Classes.

- The telephone class accepts a phone number as an argument with the add phone number method
- The telephone class uses the dail phone number method to notify the observers, the method accepts a phone number as an argument. The observers would only be notified if the number has been added to the telephone class.

---
