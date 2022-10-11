<template>
  <div>
    <div class="container">
      <div class="box">

        <h3>Login</h3>

        <div class="username">
          <input type="text" placeholder="Username" id="username">
        </div>

        <div class="email">
          <input type="text" placeholder="Email" id="email">
        </div>


        <div class="button">
          <button id="send" v-on:click="message">Send</button>
        </div>

        <div class="message">
          <div class="success" id="success">Your Message Successfully Sent!</div>
          <div class="danger" id="danger">Fields can't be Empty!</div>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "TestModal",

  data() {
    return {
      username: '',
      email: '',
    }
  },


  methods: {
    message: function () {
      this.username = document.getElementById('username');
      this.email = document.getElementById('email');
      const success = document.getElementById('success');
      const danger = document.getElementById('danger');

      if (this.username.value === '' || this.email.value === '') {
        danger.style.display = 'block';
      } else {
        setTimeout(() => {
          this.username.value = '';
          this.email.value = '';
        }, 2000);

        success.style.display = 'block';
      }
      setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
      }, 4000);


    }
  }
}


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}

.container {
  width: 700px;
  height: auto;
  background-color: wheat;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}

.box {
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

h3 {
  font-size: 35px;
  margin: 15px;
}

.username {
  width: 100%;
  position: relative;
  margin-bottom: 15px;

}

.username input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #eee;
  border-radius: 40px;

}

.username input::placeholder {
  color: #7f7d7d;
  font-weight: 500;

}

.email {
  width: 100%;
  position: relative;
  margin-bottom: 15px;

}

.email input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #eee;
  border-radius: 40px;

}

.email input::placeholder {
  color: #7f7d7d;
  font-weight: 500;

}

.button {
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.button button {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  color: #ffffff;
  background-color: #A1BF37;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

.message {
  width: 100%;
  position: relative;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.message .success {
  font-size: 20px;
  color: green;
  position: absolute;
  animation: buttons .3s linear;
  display: none;
}

.message .danger {
  font-size: 20px;
  color: red;
  position: absolute;
  transition: .3s;
  animation: buttons .3s linear;
  display: none;
}

@keyframes buttons {
  0% {
    transform: scale(0, 1);
  }
  50% {
    transform: scale(0, 5);
  }
  100% {
    transform: scale(1);
  }
}

</style>