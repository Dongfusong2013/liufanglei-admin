<template>
  <ProjectDetail :is-edit="false" articleType="ideaArticle" />
</template>

<script>
import ProjectDetail from '../components/ProjectDetail.vue'

export default {
  name: 'CreateForm',
  components: { ProjectDetail }
}
</script>
