<template>
  <div></div>
</template>

<script>
import {BASE_PATH} from "../../constant";

export default {
  name: "MovieDetail",
  data() {
    return {
      movie: {}
    };
  },
  props: ['id'],
  watch: {
    '$props.id': function () {
      let id = this.$props.id;
      if (!id) return;
      this.axios.get(`${BASE_PATH}/movieApi/api?id=${id}`).then(res => {
        console.dir(res.data);
        this.movie = {...res.data};
      }).catch(e => {
        this.movie = e;
      });
    }
  }
}
</script>

<style scoped>

</style>
