const app = new Vue ({
    el: "#root",
    data: {
        todos: [
            {
                text: "Fare i compiti",
                done: false
            },
            {
                text: "Fare la spesa",
                done: false
            },
            {
                text: "Fare il bucato",
                done: false
            }
        ],
        newTodo: ""
    },
    methods: {
        addTodo: function() {
            let todoTest = {
                text: "",
                done: false
            }
            if ( this.newTodo != "" ) {
                todoTest.text = this.newTodo;
                this.todos.push(todoTest);
                this.newTodo = "";
            }
        },
        removeTodo: function(todoIndex) {
            this.todos.splice(todoIndex, 1);
        },
        doneTodo: function (todoIndex) {
            this.todos[todoIndex].done = true;
        }
    }
});