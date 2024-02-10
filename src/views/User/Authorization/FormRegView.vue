<script>
export default {
    data: function () {
        return {
            passwordType: "password",
            changeIcon: true
        }
    },
    methods: {
        visibilityPassword() {
            this.passwordType = this.passwordType === "password" ? "text" : "password";
            this.changeIcon = this.passwordType === "text" ? false : true;
        }
    }

}
</script>

<template>
    <div class="reg-container">
        <form action="" class="reg-container_form">
            <div class="reg-container_header">
                <p>Create Account</p>
            </div>
            <div class="login-container_main--input">
                <label for="">Email</label>
                <input type="email" required>
            </div>
            <div class="login-container_main--input">
                <label for="">Username</label>
                <input type="text" required>
            </div>
            <div class="login-container_main--input">
                <label for="">Password</label>
                <input :type="passwordType" required>
                <i class="fa-solid fa-eye"
                    v-if="this.changeIcon"
                    @click="visibilityPassword">
                </i>
                <i class="fa-solid fa-eye-slash"
                    v-else 
                    @click="visibilityPassword">
                </i>
            </div>
            <div class="login-container_main--input">
                <label for="">Phone Number</label>
                <input type="number" required>
            </div>
            <div class="login-container_main--input">
                <button>Sign Up</button>
            </div>

            <div class="reg-container_have--account">
                <p>Already have an account? <router-link to="/login">Log In</router-link></p>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
.reg-container {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    &_form {
        display: flex;
        flex-direction: column;
        gap: 20px
    }

    &_header {
        margin: 0 auto;
        color: rgb(234, 236, 239);
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
    }

    &_have--account {
        p {
            color: #8f8f8f;
            font-size: 14px;
            width: 223px;
            border-bottom: 1px solid transparent;

            a {
                color: #0267FF;

                &:hover {
                    border-bottom: 1px #4689ec solid;
                    color: #4689ec;
                }
            }
        }
    }
}</style>