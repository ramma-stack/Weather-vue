<template>
    <!-- Main modal -->
    <div class="fixed inset-0 flex justify-center md:items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto">
        <div @click="$emit('close')" class="bg-gray-800/50 absolute inset-0 z-10"></div>
        <div class="relative w-full max-w-2xl max-h-full z-20">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-teal-50">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-3 border-b rounded-t dark:border-teal-600">
                    <h3 class="text-xl font-semibold text-gray-800">
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
                <div class="p-5 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500">
                        Check out the list of cities on the main website. You would like to see the weather of a city where
                        you can save the city to your favorites list. That means you can see the weather in your favorite
                        city on the homepage. </p>
                    <p class="text-base leading-relaxed text-gray-500">
                        If you want to see the weather for a city that is not listed, you can add it by searching for the
                        name and clicking add city.
                    </p>
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