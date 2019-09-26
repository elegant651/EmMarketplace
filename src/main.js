// import EmbarkJS from 'Embark/EmbarkJS';

// import your contracts
// e.g if you have a contract named SimpleStorage:
//import SimpleStorage from 'Embark/contracts/SimpleStorage';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import Web3 from 'web3'

// import Config from './config'

Vue.use(Vuetify)

Vue.mixin({
  async created() {  	
    console.log(await ethereum.send('net_version'))

    try {
      await ethereum.enable()

      this.$web3 = new Web3(ethereum)      

      this.$getDefaultAccount = () => {
        return new Promise((resolve, reject) => {
    	  this.$web3.eth.getAccounts((err, data) => {
    	    if(!err) {
    	      this.$web3.eth.defaultAccount = data[0]
    	      resolve(data[0])
    	    }
    		reject(err)
    	  })
    	})
      }
    } catch (error) {
      console.error('e', error)
    }
        
    // this.$config = Config
  }
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: function (h) {
    return h(App);
   }
})
