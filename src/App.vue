<template>
  <div id="app">
    <h1>My App</h1>
  </div>
</template>

<script>
// import Alert from './components/Alert'
import toast from './'

export default {
  name: 'app',
  data () {
    return {
      counter: 0
    }
  },
  mounted () {
    // let counter = this.counter
    setInterval(() => {
      // toast.notify(({ onClose }) => (
      //   <Alert>
      //     <div class="alert" onClick={onClose}>
      //       Alert with JSX
      //     </div>
      //   </Alert>
      // ), {
      //   position: 'top-right'
      // })
      toast.notify('🌮 Tacos are delicious', {
        onClose: Function
      })
    }, 3000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c4250;
  margin-top: 60px;
}

.alert {
  padding: 1rem;
  background: rgb(162, 217, 253);
  color: #262626;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  margin-bottom: 5px;
}
</style>
