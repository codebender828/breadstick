<template>
  <div id="app">
    <h1>My App</h1>
  </div>
</template>

<script>
import Alert from './components/Alert'
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
    // using a render callback
      toast.notify(({ onClose }) => (
        <Alert>
          <div onClick={onClose}>
            Alert with JSX
          </div>
        </Alert>
      ))
    }, 3000)
  },
  methods: {
    showAlert () {
      console.log('alert component')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
