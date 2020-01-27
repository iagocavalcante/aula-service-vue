<template>
  <div class="hello">
    <h1>Temas da Redação, existem {{themes.length}} temas</h1>
    <ul>
      <li
        :key="index"
        v-for="(theme, index) in themes"
      >
        {{theme.id}} - {{theme.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Themes',
  data: () => ({
    themes: []
  }),
  mounted () {
    this.listThemes()
  },
  methods: {
    async listThemes () {
      const response = await this.$services.themes().list()
      this.themes = [...response.data]
    }
  }
}
</script>

<style>

</style>