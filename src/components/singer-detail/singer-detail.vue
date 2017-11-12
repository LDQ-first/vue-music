<template>
    <transition name='slide'>
        <music-list :songs="songs" ></music-list>
    </transition>
</template>


<script>
    import {getSingerDetail} from '../../api/singer'
    import {ERR_OK} from '../../api/config'
    import MusicList from '../music-list/music-list'

    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                songs: []
            }
        },
        components: {
            MusicList
        },
        computed: {
            ...mapGetters([
                'singer'
            ])
        },
        created() {
            console.log(this.singer)
        },
        methods: {

        }
    }

</script>


<style scoped lang="stylus" >

  @import "../../common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
  
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>