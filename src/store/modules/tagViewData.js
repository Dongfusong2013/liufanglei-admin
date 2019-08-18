const state = {
    visitViews:[],
}

const getters = {
   cachedViews(){
     var results = [];
     let views = state.visitViews;
     for (let view in views){
         results.push(view.title);
     }
     return results;
   }
}


const mutations = {
    ADD_VIEW:(state, view)=>{
        if (state.visitViews.some((v)=>{
            return v.path === view.path
        })){
           return;
        }
        state.visitViews.push(view);
    },
    DEL_VIEW(state, view){
        for (let i = 0; i < state.visitViews.length; i++){
             if (state.visitViews[i].path === view.path){
                  state.visitViews.splice(i, 1);
             }
        }
    }
}

const actions = {
    addView({commit}, view){
        return commit('ADD_VIEW', view);
    }
}

export default{
    namespaced:true,
    name:'tagViewData',
    state,
    mutations,
    actions,
    getters,
}
