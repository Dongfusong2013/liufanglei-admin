<template>
  <article-detail :is-edit="false" articleType="focusArticle" />
</template>

<script>
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  name: 'CreateForm',
  components: { ArticleDetail }
}
</script>
