<template>
<mt-cell title="通知消息"><mt-badge size="small"><span>{{ notice }}</span></mt-badge></mt-cell>
</template>

<script type="text/javascript">
import { Cell,Badge } from 'mint-ui'

import Vue from 'vue'

Vue.component(Badge.name, Badge)
Vue.component(Cell.name, Cell)

export default {
    name: "UserIndex",
    data(){
        return {
            name: 'UserIndex',
            notice: 12
        }
    }
}


</script>

<style type="text/css">

</style>