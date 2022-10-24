# Layout
 Understand folder structure of template and what everything contains

## Core Layout
```
project
│   │
│   │
│   └── src
│   │      layout
│   │      │  Footer.vue
│   │      │  Header.vue
│   │      │  Sidebar.vue
│   │      │  index.vue
│   │      │   

```
```javascript{5-6,12-17,19}
// layout -> index.vue
<script setup>
    import { useStore } from 'vuex'
    import Header from './Header.vue'
    import Sidebar from './Sidebar.vue'
    import Footer from './Footer.vue'

    let store = useStore();
</script>

<template>
  <div class="app-admin-wrap-layout-2">
    <Header />
    <Sidebar />
    <div :class="store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen === true ? '': 'full'" class="main-content-wrap">
        <main>
            <div class="main-content-wrap flex flex-col flex-grow print-area pt-10">
                <div>
                    <router-view />
                </div>
                <div class="flex-grow-1"></div>
                <Footer />
            </div>
        </main>
    </div>
  </div>
</template>