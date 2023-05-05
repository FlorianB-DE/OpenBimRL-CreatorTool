import { Ref, ref } from 'vue';

export { default as DropdownModal } from './DropdownModal.vue';
export { default as Dialog } from './Dialog.vue';

const modals: Array<Ref<boolean>> = [];

export function registerModal(): Ref<boolean> {
    const active = ref(false);
    modals.push(active);
    return active;
}

export const closeAll = () => modals.forEach((e) => (e.value = false));

window.addEventListener('click', closeAll);
