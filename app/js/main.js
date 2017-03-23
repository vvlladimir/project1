//main javascript file
/*

  Stigli su podaci sa servera. Podaci su u vidu objekta koji čuva informacije o nekom kursu i između ostalog niz ocena polaznika.

  Problem: Želimo da izvučemo statistiku koliko puta se ponavlja svaka ocena. Npr 5 osoba je dobilo ocenu 3, 7 osoba je dobilo ocenu 6, itd.

  Zadatak: Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima koji smo dobili sa servera. Funkcija treba da vrati NOVI NIZ čiji će elementi da budu novi objekti za svaku ocenu 1-10 zasebno. Primer strukture rešenja:

  var rates_count = [
    { rate_1: 4 }, // "rate_1" predstavlja ocenu "1", a 4 predstavlja koliko puta se pojavljuje u ulaznom nizu
    { rate_2: 2 },
    { rate_3: 3 },
    { rate_4: 8 },
    { rate_5: 9 },
    { rate_6: 10 },
    { rate_7: 3 },
    { rate_8: 11 },
    { rate_9: 3 },
    { rate_10: 2 }
  ];

  Rešenje možeš praviti pomoću bilo kojih petlji ili metoda, na primer sa for, forEach(), filter()...
  Po želji i potrebi možeš praviti još funkcija.
*/

var test_objekat = {
  naziv: "kurs",
  trajanje_nedelja: 5,
  predavac: {
    ime: "Mika",
    prezime: "Mikic"
  },
  ocene_polaznika: [3, 5, 7, 2, 8, 1, 9, 2, 9, 10, 3, 6, 3, 2, 7, 3, 5, 6, 10, 9, 1, 9],
  organizacija: "Infra"
};

// Potpis funkcije:
function getRatesCount(results) {
  // logika ide ovde



  function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                document.write(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.write(current + ' comes --> ' + cnt + ' times');
    }

}








}
// Ovako na kraju ispiši niz preko chrome konzole ili jsbin-a..
console.log(getRatesCount(test_objekat));
