interface User {
  id: number;
  name: string;
  email: string;
  accessLevel: string;
  login(): void;
}

class Admin implements User {
  public id: number;
  public name: string;
  public email: string;
  public accessLevel: string;

  constructor(id: number, name: string, email: string, accessLevel: string = 'admin') {
      this.id = id;
      this.name = name;
      this.email = email;
      this.accessLevel = accessLevel;
  }

  login(): void {
      console.log(`Admin ${this.name} logged in with ${this.accessLevel} access`);
  }

  deleteUser(user: User): void {
      console.log(`Admin ${this.name} has deleted user ${user.name}`);
  }
}

class RegularUser implements User {
  public id: number;
  public name: string;
  public email: string;
  public accessLevel: string;

  constructor(id: number, name: string, email: string, accessLevel: string = 'regular') {
      this.id = id;
      this.name = name;
      this.email = email;
      this.accessLevel = accessLevel;
  }

  login(): void {
      console.log(`Regular user ${this.name} logged in with ${this.accessLevel} access`);
  }

  viewContent(): void {
      console.log(`${this.name} is viewing content`);
  }
}

class GuestUser implements User {
  public id: number;
  public name: string;
  public email: string;
  public accessLevel: string;

  constructor(id: number, name: string, email: string, accessLevel: string = 'guest') {
      this.id = id;
      this.name = name;
      this.email = email;
      this.accessLevel = accessLevel;
  }

  login(): void {
      console.log(`Guest user ${this.name} logged in with ${this.accessLevel} access`);
  }

  requestAccess(): void {
      console.log(`${this.name} is requesting access`);
  }
}

class UserRepository<T extends User> {
  private users: T[] = [];

  addUser(user: T): void {
      this.users.push(user);
  }

  removeUser(id: number): void {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
          this.users.splice(index, 1);
      }
  }

  getAllUsers(): T[] {
      return this.users;
  }

  getUserById(id: number): T | undefined {
      return this.users.find(user => user.id === id);
  }
}

const adminRepo = new UserRepository<Admin>();
const regularRepo = new UserRepository<RegularUser>();
const guestRepo = new UserRepository<GuestUser>();

const admin1 = new Admin(1, "Hong", "hong@company.com");
const regular1 = new RegularUser(2, "kang", "bob@site.com");
const guest1 = new GuestUser(3, 'Lee', 'lee@example.com');

adminRepo.addUser(admin1);
regularRepo.addUser(regular1);

console.log(adminRepo.getAllUsers());
console.log(regularRepo.getAllUsers());
console.log(guestRepo.getAllUsers());


admin1.login();
admin1.deleteUser(admin1);


regular1.login();
regular1.viewContent();

guest1.login();
guest1.requestAccess();