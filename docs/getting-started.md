<script setup>
import { useData } from 'vitepress'
import BookMarks from '../components/BookMarks/BookMarks.vue'
import Fixed from '../components/Fixed.vue'
const { page } = useData()
</script>
<!-- <pre>{{ page }}</pre>

{{ 1 + 1 }}
<span v-for="i in 3">{{ i }}</span>

::: v-pre
`{{ This will be displayed as-is }}`
::: -->

<BookMarks />
<!-- <Teleport to="body">
<Fixed />
</Teleport> -->
