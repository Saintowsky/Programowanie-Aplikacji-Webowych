var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h1>Witaj " + p.imie + " i " + p.nazwisko + " mam " + p.wiek + " lat</h1>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
