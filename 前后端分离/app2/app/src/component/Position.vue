<template>
    <div>
        <!--header-->
        <com-header :title="headerData.title" :toLink="headerData.toLink"></com-header>
        <!--header end-->

        <!--container-->
        <div id="allmap"
             style="
                width: 100%;
                height:200px;
                border: 1px solid gray;
                overflow:hidden;">
        </div>
        <!--container end-->
    </div>
</template>
<script>
    import BMap from 'BMap'
    export default {
        data: () => ({
            headerData: {
                title: '网点详情',
                toLink: '/SalesOutlets'
            }
        }),
        created () {
            // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
            this.loadMap()
            // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图
        },
        mounted () {
            this.ready()
        },
        methods: {
            loadMap: function () {
                console.log(this.$route.params.name)
                console.log(this.$route.params.addr)
                console.log(this.$route.params.phone)
                // setTimeout(this.ready, 0)
            },
            ready: function () {
                var map = new BMap.Map('allmap')
                map.enableScrollWheelZoom(true)
                console.log(map)

                var localSearch = new BMap.LocalSearch(map)
                // localSearch.enableAutoViewport() // 允许自动调节窗体大小
                map.clearOverlays() // 清空原来的标注
                localSearch.setSearchCompleteCallback(function (searchResult) {
                    var poi = searchResult.getPoi(0)
                    map.centerAndZoom(poi.point, 20)
                    var point = new BMap.Point(poi.point.lng, poi.point.lat)
                    var marker = new BMap.Marker(point) // 创建标注，为要查询的地方对应的经纬度
                    map.addOverlay(marker)
                })
                localSearch.search(this.$route.params.addr)
            }
        }
    }
</script>
<style>
    /* 去掉地图左下角的百度LOGO */
    .anchorBL {
        display:none
    }
</style>