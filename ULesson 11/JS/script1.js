const age = document.getElementById('age'),
user = {
    name: "Mikhail",
    surname: "Ivanov",
    age: age.value     
};
function showUser(surname, name) {
	alert("Пользователь " + this.surname + " " + this.name + " , возраст "+ this.age);
}
showUser.call(user);