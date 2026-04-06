<script setup>
import { ref } from 'vue'
import {useDictionaryStore} from "@/utils/dictionary/dictionary.js";
import {storeToRefs} from "pinia";
import { langs } from '@/constants/texts'

const dictStore = useDictionaryStore()
const { currentLang } = storeToRefs(dictStore)
const { setDict } = dictStore

function switchLang(lang) {
  currentLang.value = lang
}
</script>

<template>
  <div class="lang-switcher">
        <span
            :class="{ active: currentLang === langs.EN }"
            @click="setDict(langs.EN)"
        >{{ langs.EN }}</span>
    <span class="divider">|</span>
    <span
        :class="{ active: currentLang === langs.DK }"
        @click="setDict(langs.DK)"
    >{{ langs.DK }}</span>
  </div>
</template>


<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
}

span {
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease;
}

span.active {
  color: #efc79b;
}

.divider {
  cursor: default;
}
</style>