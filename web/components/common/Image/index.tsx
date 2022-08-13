import { defineComponent } from 'vue'

export const Image = defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup() { },
  render() {
    return <img></img>
  }
})

function fecthImage(src: string) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img')
    image.onload = resolve
    image.onerror = reject
    image.src = src
  })
}

