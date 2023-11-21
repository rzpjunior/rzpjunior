<template>
    <div class="bg-black text-green-400 min-h-screen">
    <header class="bg-black text-green-400 p-8 text-center">
      <h1 class="text-4xl font-extrabold">Rizky Putra Junior</h1>
      <p class="text-lg font-light">Software Engineer | Coding Enthusiast</p>
    </header>

    <section class="max-w-3xl mx-auto my-8 p-8 bg-gray-900 shadow-lg">
      <h2 class="text-3xl font-semibold mb-4 text-green-400">About Me</h2>
      <p class="mb-4">
        Welcome to my portfolio! I am a passionate web developer with a strong background in creating dynamic and responsive web applications.
        Let's turn ideas into reality through code!
      </p>
      <div class="flex items-center space-x-4">
        <i class="fab fa-github text-lg"></i>
        <a href="https://github.com/yourgithubusername" class="text-green-400 hover:underline">GitHub</a>
      </div>
      <div class="flex items-center mt-2 space-x-4">
        <i class="fab fa-linkedin text-lg"></i>
        <a href="https://www.linkedin.com/in/yourlinkedinusername" class="text-green-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  
      <section class="max-w-3xl mx-auto my-8 p-8 bg-gray-900 shadow-lg">
        <h2 class="text-3xl font-semibold mb-4 text-green-400">Experience</h2>
        
        <div class="flex flex-col space-y-4">
          <!-- Experience item -->
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
            <div>
              <p class="mb-2">Job Title, Company Name</p>
              <p class="mb-2 text-sm text-gray-400">Date</p>
              <p>Job Description</p>
            </div>
          </div>
  
          <!-- Add more experience items as needed -->
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
            <div>
              <p class="mb-2">Job Title, Company Name</p>
              <p class="mb-2 text-sm text-gray-400">Date</p>
              <p>Job Description</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="max-w-3xl mx-auto my-8 p-8 bg-gray-900 shadow-lg">
        <h2 class="text-3xl font-semibold mb-4 text-green-400">Projects</h2>
        <!-- Add your project details here -->
        <p class="mb-2">Project Name, Date</p>
        <p class="mb-4">Project Description</p>
      </section>
  
      <button @click="downloadCV" class="block mx-auto my-8 px-6 py-3 bg-green-400 text-black rounded">
        Download CV
      </button>
  
      <!-- Add your CV download link here -->
      <!-- <a :href="cvDownloadLink" download="Your_Name_CV.pdf" style="display: none;" ref="cvDownloadLink"></a> -->
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      downloadCV() {
        // Uncomment the following line and replace the href attribute with the path to your CV
        // this.$refs.cvDownloadLink.click();
      },
    },
  };
  </script>
  