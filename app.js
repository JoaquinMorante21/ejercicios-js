/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

/* const Pizza = [
  {
    nombre: "mozzarella",
    id: 1,
    ingredientes: ["tomate", "mozzarella"],
    precio: 550,
  },

  {
    nombre: "cuatroQuesos",
    id: 2,
    ingredientes: ["mozzarella", "gorgonzola", "fontina", "parmesano"],
    precio: 800,
  },

  {
    nombre: "napolitana",
    id: 3,
    ingredientes: ["tomate", "mozzarella"],
    precio: 750,
  },

  {
    nombre: "margarita",
    id: 4,
    ingredientes: ["tomate", "mozzarella", "albahacafresca", "sal", "aceite"],
    precio: 610,
  },

  {
    nombre: "pepperoni",
    id: 5,
    ingredientes: ["tomate", "mozzarella", "pepperoni"],
    precio: 860,
  },

  {
    nombre: "marinera",
    id: 6,
    ingredientes: ["tomate", "ajo", "orégano", "aceite", "queso", "mozzarella"],
    precio: 680,
  },
];
 */
/* a) */

/* for (let index = 0; index < Pizza.length; index++) {
    if(Pizza[index].id % 2 != 0){console.log(Pizza[index].nombre)}
}
 */

/* b)

for (let index = 0; index < Pizza.length; index++) {
  if (Pizza[index].precio < 600) {
    console.log("si,tememos es la " + Pizza[index].nombre + " " + Pizza[index].precio) 
  } 
} */

/* c)

for (let index = 0; index < Pizza.length; index++) {
    console.log("la " + Pizza[index].nombre + " sale " + Pizza[index].precio)
} */

/* d)

for (let index = 0; index < Pizza.length; index++) {

    console.log(Pizza[index].nombre + " sus ingredientes son ")
    for (let o = 0; o < Pizza[index].ingredientes.length; o++) {
        console.log("-" + Pizza[index].ingredientes[o])
    }
} */