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
}

const lista = new Lista()
lista.push(15)
lista.push(40)
console.log(lista.getElementAt(0))
