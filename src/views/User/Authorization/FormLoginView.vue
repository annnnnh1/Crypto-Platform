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
    <div class="login-container">
        <form class="login-container_main">
            <div class="login-container_main--header">
                <p>Log In</p>
            </div>
            <div class="login-container_main--input">
                <label>Email / Phone Number</label>
                <input type="text" required>
            </div>
            <div class="login-container_main--input">
                <label>Password</label>
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
            <div class="login-container_main--continue">
                <a href="#">Forgot your password?</a>
            </div>
            <div class="login-container_main--input">
               <router-link to="/account/profile" class="login-container_main--input-login"><button>Log In</button></router-link>
            </div>
            <div class="login-container_main--separation">
                <fieldset>
                    <legend align="center">or</legend>
                </fieldset>
            </div>
            <div class="login-container_main--continue">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                        <path fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    <p>Continue with Google</p>
                </button>
            </div>
            <div class="login-container_main--continue">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                        width="24px" height="24px">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(5.33333,5.33333)">
                                <path
                                    d="M40.084,32.613c-0.848,1.835 -1.254,2.655 -2.342,4.274c-1.521,2.264 -3.67,5.089 -6.326,5.109c-2.361,0.018 -2.971,-1.507 -6.176,-1.482c-3.204,0.016 -3.872,1.51 -6.237,1.484c-2.654,-0.022 -4.688,-2.568 -6.21,-4.826c-4.259,-6.34 -4.707,-13.768 -2.076,-17.721c1.861,-2.803 4.807,-4.449 7.572,-4.449c2.817,0 4.588,1.514 6.916,1.514c2.262,0 3.638,-1.517 6.896,-1.517c2.464,0 5.07,1.313 6.931,3.575c-6.09,3.262 -5.101,11.763 1.052,14.039z" />
                                <path
                                    d="M30.046,12.072c1.269,-1.577 2.232,-3.804 1.882,-6.072c-2.069,0.138 -4.491,1.418 -5.905,3.075c-1.282,1.51 -2.345,3.752 -1.931,5.922c2.259,0.069 4.597,-1.233 5.954,-2.925z" />
                                <path
                                    d="M36.736,20.421c-8.736,9.58 -16.736,0.58 -27.508,7.421c0.375,3.027 1.53,6.303 3.565,9.331c1.521,2.258 3.556,4.804 6.21,4.826c2.365,0.025 3.033,-1.469 6.237,-1.484c3.205,-0.024 3.814,1.5 6.176,1.482c2.656,-0.021 4.805,-2.846 6.326,-5.109c1.088,-1.619 1.494,-2.439 2.342,-4.274c-5.206,-1.926 -6.695,-8.3 -3.348,-12.193z" />
                            </g>
                        </g>
                    </svg>
                    <p>Continue with Apple</p>
                </button>
            </div>
            <div class="login-container_main--create-account">
                <router-link to="/register">
                    Create a Crypto Platform Account
                </router-link>
            </div>
        </form>
        <div class="login-container_qr">
            <h3>Log in with QR code</h3>
            <img src="https://i.yapx.ru/W12Xe.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">
.login-container {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;

    &_qr {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        h3 {
            color: #eaecef
        }
        img {
            width: 250px;
        }
    }

    &_main {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &--header {
            p {
                color: rgb(234, 236, 239);
                font-weight: 600;
                font-size: 28px;
                line-height: 36px;
            }
        }

        &--input {
            display: flex;
            flex-direction: column;
            position: relative;

            label {
                margin: 0px 0px 4px;
                font-size: 14px;
                line-height: 20px;
                width: 100%;
                color: rgb(234, 236, 239);
                font-weight: 500;
            }

            input {
                position: relative;
                width: 400px;
                padding: 15px 10px 15px;
                background: transparent;
                border: 1px #8f8f8f solid;
                border-radius: 5px;
                outline: none;
                color: #fff;
                font-size: 16px;
                letter-spacing: 1px;
            }

            button {
                font-size: 20px;
                border: none;
                outline: none;
                background: #0267FF;
                color: #fff;
                padding: 10px;
                border-radius: 10px;
                font-weight: 600;
                width: 400px;
                &:hover {
                    background: #1e73f1;                    
                }
            }

            a {
                color: #0267FF;
                // border-bottom: 1px solid transparent;

                &:hover {
                    // border-bottom: 1px #4689ec solid;
                    color: #4689ec;
                }
            }
            i {
                position: absolute;
                top: 40px;
                right: 17px;
                cursor: pointer;
                color: #8f8f8f;
                transition: 0.2s;
                &:hover {
                    color: #eaecef;
                }
            }
        }

        &--separation {
            display: flex;
            width: 400px;
            gap: 15px;
            align-items: center;

            fieldset {
                border: 0;
                border-top: 0.1px solid #8f8f8f;
                width: 100%;

                legend {
                    color: #8f8f8f;
                    padding: 0 10px;
                }
            }
        }

        &--continue {
            svg {
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
            }

            button {
                color: #eaecef;
                display: flex;
                justify-content: center;
                position: relative;
                background: #424653;
                border-radius: 10px;
                padding: 15px 16px;
                width: 400px;
                transition: 0.3s;

                &:hover {
                    background: #535868;
                }
            }

            a {
                color: #0267FF;
                font-size: 14px;
                border-bottom: 1px solid transparent;

                &:hover {
                    border-bottom: 1px #4689ec solid;
                    color: #4689ec;
                }
            }
        }

        &--create-account a {
            color: #0267FF;
            font-size: 14px;
            border-bottom: 1px solid transparent;

            &:hover {
                border-bottom: 1px #4689ec solid;
                color: #4689ec;
            }
        }
    }

}
</style>