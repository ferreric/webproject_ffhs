let todos = '[{"userId":1,"id":1,"title":"delectus aut autem","completed":false},{"userId":1,"id":2,"title":"quis ut nam facilis et officia qui","completed":false},{"userId":1,"id":3,"title":"fugiat veniam minus","completed":false},{"userId":1,"id":4,"title":"et porro tempora","completed":true},{"userId":1,"id":5,"title":"laboriosam mollitia et enim quasi adipisci quia provident illum","completed":false},{"userId":1,"id":6,"title":"qui ullam ratione quibusdam voluptatem quia omnis","completed":false}]';
function getOpenTodos(jsonStr) {
    let obj = JSON.parse(jsonStr)
    console.log(obj)
    console.log(obj.length)
    console.log(obj[0])
    console.log(obj[0].title)
    let output = ""
    for (let i = 0 ; i < obj.length ; i++) {
        if (!obj[i].completed) {
            output += obj[i].title + "\n"
        }
    }
    return output
}

console.log(getOpenTodos(todos))