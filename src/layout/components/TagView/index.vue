<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link v-for="tag in visitViews" ref="tag" :key="tag.path" :class="isActive(tag)?'active':''" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span" class="tags-view-item">
        <!-- @contextmenu.prevent.native="openMenu(tag,$event)" -->
        {{ tag.title }}
        <span v-if="!tag.fix" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
  </div>
</template>


<script>
  import {
    mapMutations
  } from 'vuex';
  import ScrollPane from './ScrollPane';

  export default {
    name: 'TagView',
    data() {
      return {
        fixViews: [
          {
          title: '首页',
          path: '/dashboard',
          fix: true,
        }]
      }
    },
    components: {
      ScrollPane
    },
    watch: {
      $route() {
        this.addCurrentPathToVisitViews();
      }
    },
    computed: {
      visitViews() {
        return this.$store.state.tagViewData.visitViews;
      }
    },
    beforeMount() {
      this.fixViews.forEach((item)=>{
        this.ADD_VIEW(item);
      })
      this.addCurrentPathToVisitViews();
    },
    methods: {
      ...mapMutations('tagViewData', ['ADD_VIEW', 'DEL_VIEW']),

      createTagView(routeView, fixFlag){
        return {
          title: routeView.meta.title,
          path: routeView.fullPath,
          fix: fixFlag,
        }
      },

      isActive(tag) {
        return this.$route.fullPath === tag.path;
      },

      addCurrentPathToVisitViews() {
        var routeView = this.$route;
        this.ADD_VIEW(this.createTagView(routeView, false));
      },

      closeSelectedTag(view) {
        this.DEL_VIEW(view);
        let lastView = this.visitViews.slice(-1)[0];
        if (lastView) {
          this.$router.push(lastView.path);
        } else {
          this.$router.push('/');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags-view-container {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

    .tags-view-wrapper {
      .tags-view-item {
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;

        &:first-of-type {
          margin-left: 15px;
        }

        &:last-of-type {
          margin-right: 15px;
        }

        &.active {
          background-color: #42b983;
          color: #fff;
          border-color: #42b983;

          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
  }
</style>
