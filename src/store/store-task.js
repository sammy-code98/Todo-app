import Vue from 'vue'
import { uid } from 'quasar'

const state = {



    // using data in object format
    tasks: {
        'id1': {
            name: "study for 3 hours",
            completed: false,
            dueDate: "2020/05/10",
            dueTime: "22:00"
        },
        'id2': {
            name: "code for 6 hours",
            completed: false,
            dueDate: "2020/05/10",
            dueTime: "22:00"
        },
        'id3': {
            name: "see a movie",
            completed: false,
            dueDate: "2020/05/10",
            dueTime: "22:00"
        }

    }

    // all the data goes here
    // tasks: [{
    //         id: 1,
    //         name: "study for 3 hours",
    //         completed: false,
    //         dueDate: "2020/05/10",
    //         dueTime: "22:00"
    //     },
    //     {
    //         id: 2,
    //         name: "code for 6 hours",
    //         completed: false,
    //         dueDate: "2020/05/10",
    //         dueTime: "22:00"
    //     },
    //     {
    //         id: 3,
    //         name: "see a movie",
    //         completed: false,
    //         dueDate: "2020/05/10",
    //         dueTime: "22:00"
    //     },
    //     {
    //         id: 4,
    //         name: "have an amazing sleep",
    //         completed: false,
    //         dueDate: "2020/05/10",
    //         dueTime: "22:00"
    //     }
    // ]

}

const mutations = {
    // contains methods which manipulate the state instantly and directly

    updateTask(state, payload) {
        // console.log('payload (from mutation):', payload)

        // copy to state
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        // console.log('delete id :', id)
        // delete state.tasks[id]
        Vue.delete(state.tasks, id)
    },

    // this mutation sends to the store
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }


}

const actions = {
    // contains async methods
    updateTask({ commit }, payload) {
        // console.log('update task actions')
        // console.log('payload: ', payload)
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },

    // the below line of code sends data to the store/state
    addTask({ commit }, task) {
        let taskUid = uid()
        let payload = {
            id: taskUid,
            task: task
        }
        commit('addTask', payload)
    }



}

const getters = {
    // contains data from state to be used by components
    // tasks: (state) => {
    //     return state.tasks

    // }
    tasksTodo: (state) => {
        let tasks = {};
        // this populates the task object
        Object.keys(state.tasks).
        forEach(function(key) {
            let task = state.tasks[key]
                // console.log('task:', tasks)
            if (!task.completed) {
                tasks[key] = task
            }
        });
        return tasks

    },
    tasksCompleted: (state) => {
        let tasks = {};
        // this populates the task object
        Object.keys(state.tasks).
        forEach(function(key) {
            let task = state.tasks[key]
                // console.log('task:', tasks)
            if (task.completed) {
                tasks[key] = task
            }
        });
        return tasks

    }
}

export default {
    namespaced: true, // this allows for multiple store modules
    state,
    mutations,
    actions,
    getters
}