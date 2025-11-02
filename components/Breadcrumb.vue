<template>
    <nav aria-label="breadcrumb" class="my-3">
        <ol class="breadcrumb bg-transparent mb-0">
            <li class="breadcrumb-item">
                <NuxtLink to="/" class="text-secondary text-decoration-none">Trang chủ</NuxtLink>
            </li>
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item"
                :class="{ active: index === breadcrumbs.length - 1 }" aria-current="page">
                <template v-if="index !== breadcrumbs.length - 1">
                    <NuxtLink :to="crumb.path" class="text-secondary text-decoration-none">
                        {{ crumb.name }}
                    </NuxtLink>
                </template>
                <template v-else>
                    <span class="fw-semibold text-dark">{{ crumb.name }}</span>
                </template>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
    const segments = route.path.split('/').filter(Boolean)
    return segments.map((seg, i) => ({
        name: seg
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase()),
        path: '/' + segments.slice(0, i + 1).join('/')
    }))
})
</script>

<style scoped>
.breadcrumb {
    font-size: 14px;
    margin: 0;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: "›";
    color: #6c757d;
    font-weight: 500;
}

.breadcrumb-item a {
    color: #6c757d;
    transition: color 0.2s ease;
}

.breadcrumb-item a:hover {
    color: #000;
    text-decoration: underline;
}

.breadcrumb-item.active {
    color: #000;
    font-weight: 600;
}
</style>
