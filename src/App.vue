<template>
  <div id="app">
    <img src="../assets/480w/breadstick-logo.png" alt="Breadstick" width="250px">
    <h1>Breadstick</h1>
    <h3>A simple but flexible implementation of toast style notifications for Vue.js</h3>
    <h2>🌟 Features</h2>
    <ul>
      <li><strong>An imperative API.</strong> This means that you don't need to set component state or render elements to trigger notifications. Instead, just call a function. This makes it very user friendly for component library authors.</li>
      <li><strong>Render whatever you want.</strong> Utilize the render callback to create entirely custom notifications.</li>
      <li><strong>Functional default styles.</strong> Import the provided css for some nice styling defaults or write your own styles.</li>
    </ul>
    <div class="buttons">
      <button
        @click="bakeAllBread"
      >
        🌽 Make all the breadsticks
      </button>
      <button
        @click="bakeTopLeft"
      >
        🥕 Bake Top Left breadstick
      </button>
      <button
        @click="bakeBottomRight"
      >
        🥭 Bake Bottom Right breadstick
      </button>
    </div>
    <div class="docs">
      <a href="https://github.com/codebender828/breadstick">Documentation</a>
      <a href="https://github.com/codebender828/breadstick">Github</a>
      <a style="background: #FF813F; display: inline-flex;" target="_blank" href="https://www.buymeacoffee.com/dIlWof6x5">
        <img style="margin-right: 10px; height: 20px;" src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee">
        <span>Buy me a coffee</span>
      </a>
    </div>
    <div class="made">
      Made with ❤️ by <a target="_blank" href="https://twitter.com/codebender828">Jonathan Bakebwa 🇺🇬</a>
    </div>
  </div>
</template>

<script>
import { Close } from './components/Alert/index'

export default {
  name: 'app',
  created () {
    const descContent = 'Simple and flexible toast style notifications for Vue.js.'
    const createDescription = () => {
      const desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      desc.setAttribute('content', descContent)
      return document.head.appendChild(desc)
    }
    const description = document.head.querySelector('meta[name=description]')
    document.title = '🥖 Breadstick'
    description ? document.content = descContent
      : createDescription()
  },
  data () {
    return {
      counter: 0,
      positions: [
        {
          name: 'top',
          message: '🌮 Tacos are extremely delicious'
        },
        {
          name: 'top-left',
          message: '🦑 Octopus Octopus!'
        },
        {
          name: 'top-right',
          message: '🥝 Kiwis are super awesome.'
        },
        {
          name: 'bottom',
          message: '💧 Drink water! Stay hydrated.'
        },
        {
          name: 'bottom-left',
          message: '🥑 Was that Wesley Snipes?'
        },
        {
          name: 'bottom-right',
          message: '🥔 Pray, meditate & stay calm. Be cool.'
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.$breadstick.notify(({ onClose }) => {
        return (
          <div class="welcome">
            <div style={{ textAlign: 'left' }} onClick={onClose}>
              <img src="https://res.cloudinary.com/xtellar/image/upload/w_200/v1572857445/me_zqos4e.jpg" alt="Jonathan Bakebwa" />
              <h3 style={{ marginTop: 0 }}>Hi! Welcome to breadstick. 🥖</h3>
              <p style={{ marginBottom: 0, marginTop: '5px' }}>A simple but flexible implementation of toast style notifications for Vue.js.</p>
            </div>
            <Close close={onClose} />
          </div>
        )
      }, { duration: 5000 })
    }, 2000)
  },
  methods: {
    bakeAllBread () {
      this.positions.forEach(position => {
        this.$breadstick.notify(position.message, { position: position.name })
      })
    },
    bakeBottomRight () {
      this.$breadstick.notify('🥞 Bottom right pancakes', { position: 'bottom-right' })
    },
    bakeTopLeft () {
      this.$breadstick.notify('🍊 Orange is the same orange', { position: 'top-left' })
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c4250;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome {
  margin: 2.5px;
  background-color: white;
  overflow: hidden;
  max-width: 650px;
  position: relative;
  border-radius: 0.4rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  padding: 1rem;
  padding-right: 48px;
  box-shadow: rgba(52, 58, 64, 0.15) 0px 1px 10px 0px,
    rgba(52, 58, 64, 0.1) 0px 6px 12px 0px,
    rgba(52, 58, 64, 0.12) 0px 6px 15px -2px;
}

h2,
h3 {
  margin-bottom: 0;
}

ul {
  max-width: 500px;
  text-align: left;
}

ul li {
  margin-bottom: 10px;
}

.buttons button {
    background: #1968ff;
    color: #fff;
    font-weight: 700;
    border-radius: 3px;
    outline: none;
    border: none;
    font-size: 1rem;
    padding:  0.8rem 1rem;
    margin: 0.5rem 0.8rem;
    transition: all 0.2s ease-in-out;

    &:focus {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
    }
  }

.docs {
  padding-top: 20px;
}

.docs a {
  font-weight: 700;
  margin: 0 30px;
  margin-bottom: 20px;
  padding:  10px 20px;
  color: #fff;
  background: #262626;
  border-radius: 3px;
}
</style>

<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 20px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Arial', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style>
