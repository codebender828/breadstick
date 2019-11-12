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
  mounted () {
    const showAlert = () => alert('Hello!')
    toast.notify((h, { onClose = true }) => {
      return h(Alert, {
        on: {
          click: showAlert
        }
      }, 'Another Alert message')
    })
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
