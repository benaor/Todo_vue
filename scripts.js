const todos = [
  {
    text: "Learn HTML, CSS and Javascript",
    done: true
  },
  {
    text: "Learn the basics of Vue JS",
    done: false
  },
  {
    text: "Complete Vue JS Challenge with excellence",
    done: false
  }
]

const TodoApp = {
  data() {
    return {
      todos,
      newTodo: { done: false }
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo)
        this.newTodo = { done: false }
      } else {
        alert("the input file is empty")
      }
    }
  }
}

Vue.createApp(TodoApp).mount("#app")
