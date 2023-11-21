<!-- Loading.vue -->
<template>
    <div class="loading">
      <p class="text-4xl font-semibold text-blue-300" ref="loadingText">{{ loadingText }}</p>
      <div class="blinking-line"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading',
    data() {
      return {
        loadingText: '',
        finalText: 'RZPJUNIOR',
        typingDelay: 100, // Adjust typing delay as needed
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
  
            // Display final text after a delay
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
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }
  
  .blinking-line {
    width: 8px;
    height: 2em;
    background-color: black;
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
  