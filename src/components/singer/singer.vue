<template>
    <div class="singer" ref="singer">
        <list-view :data="singers" ref="list" @select="selectSinger"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import {getSingerList} from '../../api/singer.js'
    import {ERR_OK} from '../../api/config.js'
    import Singer from '../../common/js/singer.js'
    import ListView from '../../base/listview/listview' 
    import {mapMutations} from 'vuex'


    const HOT_NAME = '热门'
    const HOT_SINGER_LEN = 10

    export default {
        name: 'singer',
        data() {
            return {
                singers: []
            }
        },
        computed: {

        },
        created() {
            this._getSingerList()
        },
        components: {
            ListView
        },
        watch: {

        },
        methods: {
            ...mapMutations({
                setSinger: 'SET_SINGER'
            }),
            selectSinger(singer) {
                this.$router.push({
                    path: `/singer/${singer.id}`
                })
                this.setSinger(singer)
            },
            _getSingerList() {
                getSingerList().then(res => {
                    if (res.code === ERR_OK) {
                        this.singers = this._normalizeSinger(res.data.list)
                    }
                })
            },
            _normalizeSinger(list) {
                let map = {
                    hot: {
                        title: HOT_NAME,
                        items: []
                    }
                }
                list.forEach((item, index) => {
                    if (index < HOT_SINGER_LEN) {
                        map.hot.items.push(new Singer({
                            id: item.Fsinger_mid,
                            name: item.Fsinger_name
                        }))
                    }
                    const key = item.Findex
                    if (!map[key]) {
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                })
                let hot = []
                let ret = []
                for (let key in map) {
                    let val = map[key]
                    if (val.title.match(/[a-zA-Z]/)) {
                        ret.push(val)
                    } else if (val.title === HOT_NAME) {
                        hot.push(val)
                    }
                }
                ret.sort((a, b) => {
                    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                })
                return hot.concat(ret)
            }
        }

    }
</script>

<style scoped lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
    overflow: hidden
</style>


