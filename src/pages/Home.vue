<template>
  <div>
    <Hero/>
    <Gallery/>
    <LatestPost/>
  </div>
</template>
<script>
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import LatestPost from '../components/LatestPost'

export default {
  components: {
    Hero,
    Gallery,
    LatestPost
  }
}
</script>