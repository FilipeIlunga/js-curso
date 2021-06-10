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
}

const lista = new Lista()
lista.push(15)
console.log(JSON.stringify(lista, null, 2))
//OUTPUT
/* {
    "head": {
        "value": 15
    },
    "count": 1
} */
lista.push(40)
console.log(JSON.stringify(lista, null, 2))
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
console.log(JSON.stringify(lista, null, 2))
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
