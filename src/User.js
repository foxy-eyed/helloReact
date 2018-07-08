class User {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  age() {
    const delta = new Date(Date.now() - this.birthDate.getTime());
    return Math.abs(delta.getUTCFullYear() - 1970);
  }
}

export default User;
