// Level order traversal problem from leetcode
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */



var levelOrder = function(root) {
    const levels = []
    traverse(root, 0, levels);
    return levels;
};

function traverse(node, level, levels){
    if(node === null) {
        return;
    }
    if(! levels[level]){
        levels.push([]);
    }
    levels[level].push(node.val);
    traverse(node.left, level + 1, levels);
    traverse(node.right, level + 1, levels);
}
