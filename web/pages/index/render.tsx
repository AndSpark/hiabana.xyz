import { PostList } from '@/components/in-pages/posts'
import { PaginateResult, PostModel } from '@mx-space/api-client'
import { defineComponent, inject, reactive } from 'vue'
import Welcome from '@/components/in-pages/welcome'

export default defineComponent({
  name: 'Home',
  setup(props, ctx) {
    const { posts } = reactive(inject<{ posts: PaginateResult<PostModel> }>('fetchData')!)

    return () => (
      <div class='px-4 pt-2 h-full overflow-auto'>
        <PostList postRes={posts}>
          <Welcome class='mb-4'></Welcome>
        </PostList>
      </div>
    )
  }
})
