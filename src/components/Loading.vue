<template>
    <div class="dock">
        <div class="loading">
          <p class="text-4xl font-extrabold text-green-500" ref="loadingText">> {{ loadingText }}</p>
          <div class="blinking-line"></div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading',
    data() {
      return {
        loadingText: '',
        finalText: 'RZPJUNIOR',
        typingDelay: 100, 
      };
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        const textToType = this.finalText;
        let index = 0;
  
        const typeInterval = setInterval(() => {
          this.loadingText += textToType[index];
          index++;
  
          if (index === textToType.length) {
            clearInterval(typeInterval);
  
            setTimeout(() => {
              this.loadingText = this.finalText;
            }, this.typingDelay);
          }
        }, this.typingDelay);
      },
    },
  };
  </script>
  
  <style scoped>
  .dock {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    place-items: center;
    display: grid;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    position: relative;
    padding: 10px 10px 15px 10px;
    background-color: #111827;
  }
  
  .blinking-line {
    width: 8px;
    height: 2em;
    background-color: white;
    margin-left: 0.2em;
    animation: blink 0.8s infinite alternate;
  }
  
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  </style>
  