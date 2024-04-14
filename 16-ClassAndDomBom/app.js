// ? 1) Aşağıdakı parameter-lrə sahib bir Human class-ı yaradın.

/* Human class
- Name,
- Surname,
- Age (default sıfır),
- gender
- nationality
- getFullName() - method
- getBirthYear() - method - new Date() - currentYear */


// class Human {

//     constructor(name,surname,age=0,gender,nationality){
//         this.name = name
//         this.surname = surname
//         this.age = age
//         this.gender = gender
//         this.nationality = nationality
//     }

//     getFullName(){
//         console.log(`Name : ${this.name} , Surname : ${this.surname}`);
//     }

//     getBirthYear(){
//         const date = new Date();
//         console.log("Current year :", date.getFullYear());
//     }
// }

// const human1 = new Human("Vusala", "Salimova", 19, "girl", "Azerbaijani")
// console.log(human1);
// human1.getFullName();
// human1.getBirthYear();

/* Human classından miras alan User class-ı yaradın.
User class
- Username
- Email
- isAdmin (true/false)
- isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
- password (minimum 5 simvol olmalidir)
- bio (maxlength 30 ola biler)
- changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa, newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
- changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.
Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir */


// class User extends Human {

//     constructor(name,surname,age=0,gender,nationality,username,email,isAdmin = true, password,bio){
//         super(name,surname,age,gender,nationality)
//         this.username = username;
//         this.email = email;
//         this.isAdmin = isAdmin;
//         this.isLogged = false;
//         this.password = password

    
//         if(password.length >= 5){
//             alert("Successfully");
//         }else{
//             alert("Password must contain min 5 character");
//         }


//         if(bio.length <= 30){
//             alert(this.bio = bio)
//         }else if (bio.length > 30){
//             alert("Bio must contain 30 words", this.bio = bio.substring(0,30))
//         }else{
//             this.bio = null
//         }

//     }

//     changePassword(currentPassword, newPassword){
//         if(currentPassword == this.password && currentPassword != newPassword){
//             this.password = newPassword;
//             return "Password changed successfully";
//         }
//         if (currentPassword === newPassword) {
//             return "new password and current password are the same";
//         }
//         else {
//             alert("Incorrect current password. Password remains unchanged");
//         }
//     }

//     changeEmail(users,newEmail){

//         const isUnique = !users.some(user => user !== this && user.email === newEmail);

//         if (!isUnique) {
//             return "Email is already in use. Please choose a different one.";
//         }

//         // Eğer e-posta benzersizse, e-posta adresini güncelle
//         this.email = newEmail;
//         return "Email changed successfully";
//     }
// }


    


// const user1 = new User("Vusala", "Salimova", 19, "female", "Azerbaijani", "mikasa", "salimovavusala7@gmail.com", true, "vusala137","busy")
// console.log(user1);
// console.log(user1.changePassword("vusala137","vusala2004"))
// const users = [
//     new User("Shahnaz", "Abdullayeva", 21, "female", "Turkey", "shahi", "shahnaz@gmail.com", true,"passwords123", "not busy"),
//     new User("Omer", "Mehdihxhanli", 25, "male", "Korea", "omar", "omar@gmail.com", true,"passwords12345", "sleeping")
// ];
// console.log(users[0].changeEmail(users, "omar@gmail.com"))


/* 2) User class-ından istifadə edib bir neçə user yaradın və bir users array-inə yığın.

1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir. 
2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir. */ 


class User {
    constructor(username, age,birthYear) {
      this.username = username;
      this.age = age;
      this.birthYear = birthYear
    }
}

function sortUsersByUsername(users) {
    return users.sort((a, b) => a.username.localeCompare(b.username));
}

function filterByBirthYear(array,year){
    return array.filter(elem => elem.birthYear > year)
}

const user1 = new User("vusala", 19, 2004);
const user2 = new User("gunel", 18, 2006);
const user3 = new User("aygun", 39, 1984);

const usersArray = [user1, user2, user3];
const userobj = {
    "username": "elvin",
    "age": 23,
    "birthYear": 2001,
    "country": "Azerbaijan"

} 
console.log(sortUsersByUsername(usersArray));
console.log(filterByBirthYear(usersArray,2000))


// 4. CreateUser() - parameter olaraq bir array ve bir User obj qebul edir ve hemin user-i array-e elave edir

function CreateUser(usersArray,userobj){
    return usersArray.push(userobj)
}

CreateUser(usersArray,userobj);
console.log(usersArray);

// 5. DeleteUser() - parameter olaraq bir array ve bir username qebul edir ve daxil olunmush username-de user tapilarsa hemin User-i silir, tapmazsa o zaman 'user not found' return edir.

function DeleteUser(usersArray,username){
    const userExists = usersArray.some(user => user.username === username);
  if (userExists) {
    usersArray = usersArray.filter(user => user.username !== username);
    return "User deleted successfully.";
  }
  return "User not found.";

}

console.log(DeleteUser(usersArray, "gunel"));

