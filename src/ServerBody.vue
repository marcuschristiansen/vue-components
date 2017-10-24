<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <servers></servers>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import ServerStatus from './Servers.vue';
    export default {
        components: {
            servers: ServerStatus,
        }
    }
</script>
