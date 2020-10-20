/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    const queue = [];
    
    queue.push([0, rooms[0]]);
    let visited = rooms.map(rm => false);
    
    while(queue.length > 0){
        const pair = queue.pop();
        if(!visited[pair[0]]){
            visited[pair[0]] = true;
        }
        pair[1].forEach( key => {
            if(!visited[key]){
                queue.push([key, rooms[key]]);
            }
        });
    }
    console.log(visited)
    visited = visited.filter( rm => rm !== true )
    return visited.length === 0;
};
