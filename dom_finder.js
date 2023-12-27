const getPathFromChildToParent = (parent, child) => {
    let currentNode = child
    const pathArray = []
    while(currentNode !== parent) {
        const parentElement = currentNode.parentElement
        const childrenArray = Array.from(parentElement.children)
        pathArray.push(childrenArray.indexOf(currentNode))
        currentNode = parentElement
    }
    return pathArray
}

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while(path.length) {
        currentNode = currentNode.children[path.pop()]
    }
    return currentNode.innerText
}

const findNodeValue = () => {
    const rootA = document.getElementById('rootA')
    const rootB = document.getElementById('rootB')
    const nodeA = document.getElementById('nodeA')
    const path = getPathFromChildToParent(rootA, nodeA)
    return getValueFromPath(rootB, path)
}
console.log(findNodeValue())