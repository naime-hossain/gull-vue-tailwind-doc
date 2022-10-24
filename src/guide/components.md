# Components
 Understand folder structure of template and what everything contains


## Types Of Components
Two Types of components added
- Global Component (BaseCard, BaseBtn)
- Local Component


Inside 'Base' folder those are Global Components




```
project
│ 
│   │── src
│   │     components
│   │     │  Breadcrumbs.vue
│   │     │  HeaderSearch.vue
│   │     │  
│   │     └── Base 
│   │      │
│   │      └── BaseBtn.vue
│   │      │
│   │      └── BaseCard.vue

```
> :warning: **If you want to create custom global components**: add your custom components inside base folder and call your global custom component inside main.js

- Code Snippet

```javascript{5-6,12-17,19}
// main.js 
import { createApp } from 'vue'
import App from './App.vue'
import YourCustomGlobalComponent from './components/Base/YourCustomGlobalComponent.vue'

 createApp(App)
    .component('YourCustomGlobalComponent', YourCustomGlobalComponent)
    .mount('#app')
```


## Card

- Code Snippet

```javascript{5-6,12-17,19}
 <BaseCard>
    <template v-slot:cardHeader>
        Card Header
    </template>
    Hello Card Body
 </BaseCard>
```

## Buttons

- Code Snippet

```javascript{5-6,12-17,19}
 <BaseBtn class="bg-primary text-white">
    Default Button
 </BaseBtn>
```

| Props | type | Description
| ----------- | ----------- | ----------- |
| rounded | Boolean |  rounded border 
| block | Boolean |  full width
| icon | Boolean |  it will make the button icon in center
| xl | Boolean |    large button
| sm | Boolean |    small button

