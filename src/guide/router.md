# Router
In this page you will find how to add new routes and how we handled existing routes.

## Overview
You can find our template's router configuration in src/router/index.js. This folder contains all routes of our template.

Still if there's something which is new to you, make sure you read `vue-router` [docs](https://router.vuejs.org/). 


## For Creating Children Route


> You need to add index.vue inside component folder.


```
   folder
   │  
   │  addProduct.vue
   │  viewProduct.vue
   │  index.vue
 
```

- Code Snippet

```javascript{5-6,12-17,19}
// index.vue 
<template>
    <router-view />
</template>