<template>
  <article-detail :is-edit="true" articleType="focusArticle"/>
</template>

<script>
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  name: 'EditForm',
  components: { ArticleDetail }
}
</script>
