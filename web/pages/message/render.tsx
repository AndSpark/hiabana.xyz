import Comments from '@/components/widgets/Comments'
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, ctx) {
    return () => <div class="pt-8 px-4">
      <Comments ></Comments>
    </div>
  }
})
