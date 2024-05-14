<!-- create switch component -->
<template>
    <div class="switch" :class="{ 'switch--checked': modelValue }" @click="toggle">
        <div class="switch__track"></div>
        <div class="switch__thumb"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue']);

const toggle = () => {
    emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 20px;
    background-color: #ccc;
    cursor: pointer;
}

.switch--checked {
    background-color: #2196F3;
}

.switch__track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: rgb(224, 224, 224);
    transition: background-color 0.3s;
}

.switch__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s;
}

.switch--checked .switch__thumb {
    transform: translateX(20px);
}

.switch--checked .switch__track {
    background-color: #2196F3;
}

/* hover */
.switch:hover .switch__thumb {
    background-color: #f1f1f1;
}

.switch:hover .switch--checked .switch__thumb {
    background-color: #f1f1f1;
}

.switch:hover .switch__track {
    background-color: rgb(224, 224, 224);
}
</style>