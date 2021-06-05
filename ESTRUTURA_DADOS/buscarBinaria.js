
const arvore = {}

function insert(tree, value) {
    if (tree.value) {
        if (tree.value < value) {
            insert(tree.right,value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left={}
    }
}

insert(arvore, 10)
console.log(arvore)
insert(arvore, 9)
console.log(arvore)
preOrder(arvore)