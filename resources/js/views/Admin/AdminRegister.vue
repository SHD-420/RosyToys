<template>
    <div class="py-8 px-8 max-w-lg mx-auto bg-white rounded-md shadow mt-8">
        <h4 class="font-semibold mb-2 text-2xl">Registrar un administrador</h4>
        <p class="text-slate-500 flex space-x-2 mb-8">
            <span class="font-semibold">NOTA:</span>
            <span>
                Esta acción lo desconectará de la cuenta de administrador
                actual.
            </span>
        </p>
        <register-form
            @email-error="fireInputErr"
            @general-error="fireGenErr"
        ></register-form>
    </div>
</template>

<script setup>
import { NotificationTypes, fireNotification } from "@/plugins/Notifications";
import RegisterForm from "@/components/admin/RegisterForm.vue";

const fireGenErr = fireNotification.bind(this, NotificationTypes.GENERAL_ERROR);
const fireInputErr = fireNotification.bind(this, NotificationTypes.USER_EXISTS);
</script>
