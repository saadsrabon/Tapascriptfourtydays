class User {
  constructor(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('User name must be a non-empty string');
    }
    this.name = value;
    this.id = this.generateID();
  }
  generateID() {
    return crypto.randomUUID();
  }

  toJSON() {
    return {
      name: this.name,
      id: this.id,
    };
  }
}
