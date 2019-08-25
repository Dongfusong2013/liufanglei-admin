<template>
  <ProjectDetail :is-edit="true"/>
</template>

<script>
import ProjectDetail from '../components/ProjectDetail.vue'

export default {
  name: 'EditForm',
  components: { ProjectDetail }
}
</script>
