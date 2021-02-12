<template>
    <div>
        <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
                <div class="form-group">
                <label for="username">Username:</label>
                <input type="username" v-model="username" class="form-control" id="username" placeholder="Enter username">
                </div>
                <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" v-model="password" class="form-control" placeholder="*******" >
                </div>
                <button @click="login" class="btn btn-primary">Login</button>
            </div>
        </div>
    </div> 
</template>

<script>
    import auth from "@/services/request/auth.js";
    import session from "@/services/request/session.js";
    
    export default {
        name: "LoginForm",
        data(){
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login(){
                auth.login(this.username, this.password)
                        .then(res =>{
                            const data = res.data.data;
                            session.write(data);
                            this.$store.commit('setToken',data.auth);
                            this.$store.commit('setUser', data.user);
                            this.$store.commit('login');
 
                            return this.$router.push({path:"/dashboard"});
                        }).catch(error => {
                            session.destroy();
                            const message = error.response.data.data.auth || 'Login Error';
                            this.$dialogs.alert(`Error: ${message}`,{
                                title: "Error", size:'sm'
                            }).then(res => console.log(res))
                        })
            }
        }
    }
</script>