/*
 * Complete the 'find_all_paths' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. Vertex origin
 *  2. String destination
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 */

function find_all_paths(origin, destination) {
    // Write your code here
    const result = []
    const visited = new Set()
    function helper(currentVert, prev) {
        prev += currentVert.id

        if (currentVert.id === destination) {
            result.push(prev)
            return
        }
        else if (!visited.has(currentVert.id)) {
            visited.add(currentVert.id)
            for (let v of currentVert.edges) {
                helper(v, prev)
            }
            visited.delete(currentVert.id)
        }
    }
    helper(origin, '')
    return result
}