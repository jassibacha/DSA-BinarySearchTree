class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
    insert(val) {
        // If the tree is empty, create a new node with the value and set it as the root
        if (!this.root) {
            this.root = new Node(val);
            // Then return the tree to allow for method chaining
            return this;
        }

        // Start from the root of the tree
        let currentNode = this.root;

        // Use a while loop to find the correct position for the new value
        while (true) {
            // Check if the value should be inserted in the left subtree
            if (val < currentNode.val) {
                // If the left child does not exist, insert the new node here
                if (!currentNode.left) {
                    currentNode.left = new Node(val);
                    // Return the tree to allow for method chaining
                    return this;
                } else {
                    // If the left child exists, move to the left child and continue the search
                    currentNode = currentNode.left;
                }
            }
            // Check if the value should be inserted in the right subtree
            else if (val > currentNode.val) {
                // If the right child does not exist, insert the new node here
                if (!currentNode.right) {
                    currentNode.right = new Node(val);
                    // Return the tree to allow for method chaining
                    return this;
                } else {
                    // If the right child exists, move to the right child and continue the search
                    currentNode = currentNode.right;
                }
            }
            // If the value is equal to the current node's value, don't insert it (disallow duplicates)
            else {
                return this;
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
    insertRecursively(val, currentNode = this.root) {
        // If the tree is empty, set the root to the new node
        if (!this.root) {
            this.root = new Node(val);
            // Then return the tree to allow for method chaining
            return this;
        }

        // If value is less than the current node's value go left
        if (val < currentNode.val) {
            // If the left child does not exist, insert the new node here
            if (!currentNode.left) {
                currentNode.left = new Node(val);
                // Return the tree to allow for method chaining
                return this;
            }
            // If the left child exists, continue recursively in the left subtree.
            return this.insertRecursively(val, currentNode.left);
        }
        // Value greater? Right subtree
        else {
            // If the right child does not exist, insert the new node here
            if (!currentNode.right) {
                currentNode.right = new Node(val);
                // Return the tree to allow for method chaining
                return this;
            }
            // If the right child exists, continue recursively in the right subtree.
            return this.insertRecursively(val, currentNode.right);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {}

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {}

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {}

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {}

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {}

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {}

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
