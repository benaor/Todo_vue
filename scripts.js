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
      todos
    }
  }
}

Vue.createApp(TodoApp).mount("#app")
