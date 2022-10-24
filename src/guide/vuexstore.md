# Vuex Store
 In this page you will understand usage of Vuex Store in our template


Our template uses Vuex's [module](https://vuex.vuejs.org/guide/modules.html) system to make Materio Store modules to use them as plug and play. You can check src/store/index.js file to know which modules are loaded at the start of the template.

Each module is namespaced so there will be no conflict if you create your own store module and use same actions & mutations names.

As we do care about performance of project, we haven't registered all the modules from start. Still there's some modules which are [dynamically registered](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration).