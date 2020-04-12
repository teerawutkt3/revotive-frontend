import store from '../../store/index'

export default {
    getAuth () {
        return store.state.user.profile
    },
    canCreate(role){
        return this.getAuth().roles.includes(role)
    },
    canUpdate(role){
        return this.getAuth().roles.includes(role)
    },
    canDelete(role){
        return this.getAuth().roles.includes(role)
    },
    isMyItem(createdBy){
        return this.getAuth().username == createdBy
    }
}