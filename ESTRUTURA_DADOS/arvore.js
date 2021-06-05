let a1 = {
    left: undefined,
    right: undefined,
    value: 20,
}
let a2 = {
    left: undefined,
    right: undefined,
    value: 30,
}

let arvore = {
    left: a1,
    right: a2,
    value: 10,
}

function preOrder(tree) {
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
}

function inOrder(tree) {
    tree.left && inOrder(tree.left)
    console.log(tree.value)
    tree.right && inOrder(tree.right)
}

function posOrder(tree) {
    tree.left && posOrder(tree.left)
    tree.right && posOrder(tree.right)
    console.log(tree.value)
}

preOrder(arvore)
console.log('\n')
inOrder(arvore)
console.log('\n')
posOrder(arvore)
