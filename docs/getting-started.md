<script setup>
import { useData } from 'vitepress'
import BookMarks from '../components/BookMarks.vue'
const { page } = useData()
</script>
<!-- <pre>{{ page }}</pre>

{{ 1 + 1 }}
<span v-for="i in 3">{{ i }}</span>

::: v-pre
`{{ This will be displayed as-is }}`
::: -->

<BookMarks />
