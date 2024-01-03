# SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame. Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3. dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

---

Questo è l'elenco degli studenti:
Id Name Grades
213 Marco della Rovere 78
110 Paola Cortellessa 96
250 Andrea Mantegna 48
145 Gaia Borromini 74
196 Luigi Grimaldello 68
102 Piero della Francesca 50
120 Francesca da Polenta 84

---

<br>
<br>

- **0** Creo un arrey di oggetti [Students] con chiave: id, nome e voto.
- **1** Partendo dall'arrey [Students] con funzione filter mi creo un nuovo arrey [TopStudents] utilizzando un [if] con condizione [votiTotal > 70] (esiste una funzione spiegata da Marco in aula per non usare if? Mi sembra di si.)

- **2** Partendo dall'arrey [Students] con funzione filter mi creo un nuovo arrey [TopStudents] utilizzando un [if] con condizione [votiTotal > 70] e [Id > 120] (esiste una funzione spiegata da Marco in aula per non usare if? Mi sembra di si.)

- **3** Partendo dall'arrey [Students] con funzione filter mi creo un nuovo arrey [nameStudents] con [chiave(nome)] e alla stringa risultante applico la funzione che mi trasforma le stringhe tutto in maiuscolo.

**FINE**
