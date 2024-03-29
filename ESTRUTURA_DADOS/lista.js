class Node{
    constructor(element){
        this.value = element;
        this.next = undefined;
    }
}

class Lista{
    constructor(){
        this.head = undefined;
        this.count = 0;
    }
    //Metodos
    //push() adicionar um elemento no fim da lista
    // insertAt(element,position) adicionar um elemento em qualquer posição da lista
    //remove() remove um elemento da lista
    //getElementAt(position) retorna um elemento de uma posição específica da lista
    //indexOf(element) retorna a posição de um elemento da lista
    //renoveAt(position) remove um elemento de uma posição específica da lista
    //isEmpty() checar se a lista etá vazia
    //size() retorna o tamanho da lista

    push(element) {
        const node = new Node(element)
        let current

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    getElementAt(position){
        if(position >= 0 && position <= this.count){
            let node = this.head
            for (let i= 0; i < position && node != null; i++) {
                node = node.next;
            }
            return node
        }
        return undefined
    }
    insertAt(element, position) {
        if (position >= 0 && position <= this.count) {
            const node = new Node(element)
            if (position == 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node
            }
            this.count++;
            return true
        }return false
    }
    removeAt(position) {
        if (position >= 0 && position <= this.count) {
            const current = this.head
            if (position === 0) {
                this.head = current.next;
            } else {
                const previus = this.getElementAt(position - 1)
                const current = previus.next
                previus.next = current.next
            }
            this.count--;
            return true
        }
        return false
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++){
            if (current.value == element) {
                return i;
            } else {
                current = current.next
            }
        }
        return -1
    }
    isEmpty() {
        return this.count <1
    }
    size() {
        return this.count
    }

}

const lista = new Lista()
const listaVazia = new Lista()
lista.push(15)
//console.log(JSON.stringify(lista, null, 2))
//OUTPUT
/* {
    "head": {
        "value": 15
    },
    "count": 1
} */
lista.push(40)
//console.log(JSON.stringify(lista, null, 2))
// OUTPUT
/* {
    "head": {
        "value": 15,
            "next": {
            "value": 40
        }
    },
    "count": 2
} */
lista.push(10)
//console.log(JSON.stringify(lista, null, 2))
// OUTPUT
/* {
    "head": {
        "value": 15,
            "next": {
            "value": 40,
                "next": {
                "value": 10
            }
        }
    },
    "count": 3
} */
console.log(JSON.stringify(lista, null, 2))
//OUTPUT
/* 
{
  "head": {
    "value": 15,
    "next": {
      "value": 40,
      "next": {
        "value": 10
      }
    }
  },
  "count": 3
}
*/
lista.removeAt(2)
console.log(JSON.stringify(lista, null, 2))
//OUTPUT
/* {
  "head": {
    "value": 15,
    "next": {
      "value": 40
    }
  },
  "count": 2
} */


const result = lista.removeAt(9)
console.log(result)
//OUTPUT - false - > undefined position
let resultPosition = lista.indexOf(40)
console.log(resultPosition)
// OUTPUT = 1
resultPosition = lista.indexOf(20)
console.log(resultPosition)
//OUTPUT = -1

let i = listaVazia.isEmpty()
console.log(`ListaVazia isEmpty: ${i}`)
//OUTPUT = ListaVazia isEmpty: true
i = lista.isEmpty()
console.log(`Lista isEmpty: ${i}`)
//OUTPUT = Lista isEmpty: false
i = listaVazia.size()
console.log(`ListaVazia size: ${i}`)
//OUTPUT = Lista isEmpty: ListaVazia size: 0
i = lista.size()
console.log(`Lista size: ${i}`)
//OUTPUT = Lista isEmpty: Lista size: 2





