<template>
  <article-detail :is-edit="false" articleType="ideaArticle" />
</template>

<script>
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  name: 'CreateForm',
  components: { ArticleDetail }
}
</script>
