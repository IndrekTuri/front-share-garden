<template>
  <div class="container">

    <!-- Modal -->
    <div class="modal fade" id="loginModal" role="dialog" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title">__Login__</h4>
            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>

            <div class="message">
              <AlertError :errorMessage="alertError"/>
            </div>

          </div>

          <div class="modal-body">

            <div class="row">

              <div class="col">

                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" v-model="logInRequest.userName" placeholder="Username *"/>
                </div>
              </div>
            </div>

            <div class="row">

              <div class="col">

                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" v-model="logInRequest.password"
                         placeholder="Password *"/>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-success" data-bs-dismiss="modal" v-on:click="login">Login</button>
            <div class="row-footer">
              <label>Not as user?</label>&nbsp;
              <a type="button" class="link" data-bs-target="#signupModal" data-bs-toggle="modal">Sign Up</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AlertError from "@/components/Alerts/AlertError";
import SignUpModal from "@/components/SignUpModal";

export default {
  name: "LoginModal",
  components: {AlertError, SignUpModal},
  data() {
    return {
      alertError: '',
      roles: [],
      logInRequest: {
        userName: '',
        password: ''
      },
      logInResponse: {
        userId: '',
        roleId: ''
      }
    }
  },
  methods: {
    login: function () {
      this.alertError = ''
      this.$http.post("/user/login", this.logInRequest
      ).then(response => {
        this.logInResponse = response.data
        sessionStorage.setItem('userId', this.logInResponse.userId)
        sessionStorage.setItem('roleId', this.logInResponse.roleId)
        if (this.logInResponse.roleId === 1) {
          setTimeout(function () {
            $("#loginModal").modal("hide");
          }, 500);
          this.$router.push({name: 'adminRoute'})
        } else {

          setTimeout(function () {
            $("#loginModal").modal("hide")
          }, 500);
          this.toHomeView()
        }
      }).catch(error => {
        this.alertError = error.response.data.detail;
      })
    }
  },
  toHomeView: function () {
    this.$router.push({name: 'homeRoute'})
  },

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}

.modal-content {
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.modal-header {
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.modal-title {
  color: #A1BF37;
  margin: 5px;
  font-weight: bold;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
}

.message {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 5px;
}

.modal-body {
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-group {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}

.form-group label {
  float: left;
  font-size: 14px;
  color: #A1BF37;
  width: 50%;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 2px;
}

.form-control {
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  font-size: 12px;
  background-color: #eee;
  border-radius: 40px;
}

.form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);
}

.form-control::placeholder {
  color: #7f7d7d;
  font-weight: 250;
}

.modal-footer {
  display: inline-block;
  text-align: center;
}

.row-footer {
  font-size: 14px;
  display: block;
}

.link {
  color: #A1BF37;
}

.btn {
  width: 25%;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #A1BF37;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

.btn:hover {
  background-color: yellowgreen;
}
</style>