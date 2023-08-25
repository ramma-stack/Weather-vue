<template>
    <!-- Main modal -->
    <div class="fixed inset-0 flex justify-center md:items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto">
        <div @click="$emit('close')" class="bg-gray-800/50 absolute inset-0 z-10"></div>
        <div class="relative w-full max-w-2xl max-h-full z-20">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-teal-50">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-teal-600">
                    <h3 class="text-xl font-semibold text-gray-900">
                        Terms of Service
                    </h3>
                    <button type="button" @click="$emit('close')"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-teal-600 dark:hover:text-white"
                        data-modal-hide="defaultModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500">
                        With less than a month to go before the European Union enacts new consumer privacy laws
                        for its citizens, companies around the world are updating their terms of service
                        agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
                        May 25 and is meant to ensure a common set of data rights in the European Union. It
                        requires organizations to notify users as soon as possible of high-risk data breaches
                        that could personally affect them.
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-teal-200 rounded-b dark:border-teal-600">
                    <button type="button" @click="$emit('close')"
                        class="text-teal-500 bg-white hover:bg-teal-100 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg duration-100 text-sm font-medium px-5 py-2.5 hover:text-teal-800 focus:z-10 dark:bg-teal-600 dark:text-white dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-600">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    emits: ['close'],
}
</script>

<style lang="scss" scoped></style>