## Todo list

1. Maak nieuwe variabelen aan:
- listTitle (string)
- todos (array [])
- name (string)
- Geef ze allebei een waarde, bijvoorbeeld:
`listTitle: String = 'My to do list';`

en:

`todos: String[] = ['boodschappen doen', 'hond uitlaten'];`

2. In de html template, laat de titel van de todo zien.

3. Maak een for loop in de template, en laat alle items zien als <li>.

4. Als de lijst leeg is, schrijf dan: "Geen todos, geniet van je vrije tijd"

5. Maak boven aan je pagina een input box, met two way binding [(ngModel)] koppel deze aan de naam.

6. Voeg de naam ook toe aan de titel van de todolist (middels one way binding): {{title}} van {{naam}}

7. Wanneer de naam gelijk is aan je eigen naam, zeg dan extra paragraaf: wat leuk dat je er weer bent!