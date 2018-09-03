# ListView

## 使用指南
```
import {ListView} from 'mona'
```

## 代码演示

### • 支持瀑布流和手动下拉刷新

on-infinite是每次到底部的回调，enableRefresh控制是否开启手动下拉刷新，on-refresh是下拉刷新的回调


```
<list-view class="list-view" :on-refresh="onRefresh" ref="listView" :on-scroll="onScroll"
	:on-infinite="onInfinite"
	:isEnd="isEnd">
	<div class="list-view-group">
		<div class="list-view-item flex-center-y" @click="toTop" v-for="(item, index) in list">
			<div class="avatar r-circle"></div>
			<div class="info flex-1" @click="toTop">{{`_mirror_ ${index}`}}</div>
		</div>
	</div>
</list-view>



export default {

	components: {
		DemoPage,
		DemoSection,
		ListView
	},

	props: {},

	data () {
		return {
			list: [],
			isEnd: false
		}
	},

	computed: {},

	watch: {},

	methods: {
		init () {
			this.getList()
		},
		onRefresh (done) {
			setTimeout(() => {
				this.getList()
				this.isEnd = this.list.length >= 20
				done()
			}, 2000)
		},

		onInfinite (done) {
			setTimeout(() => {
				this.list = this.list.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
				this.isEnd = this.list.length > 40
				done()
			}, 1500)
		},
		onScroll (e) {
			console.log(`scrollTop: ${e.scrollTop}`)
		},
		getList () {
			this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		},
		toTop () {
			ListView.toTop()
		}
	},

	created () {
		this.init()
	},

}


```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| enableInfinite | 是否允许下滑加载更多 | Boolean | true | - |
| infiniteTimer | 下滑触底检测频率 | Number | 200 | - |
| bottomEmit | 距离底部多少像素触发回调	 | Number | 100 | - |
| onInfinite(done)	 | 下滑触底钩子函数，done函数是通知回调 | Function | - | - |
| enableRefresh | 是否展示取消按钮 | Boolean | true | - |
| onRefresh(done)	 | 手动下拉刷新钩子函数，done函数是通知回调 | Function | - | - |
| offset| 下拉多少距离触发下拉刷新回调 | Number | 50 | - |
| isEnd | 是否已经加载完毕，不再触发下滑事件 | Boolean | false | - |
| onScroll | 滚动的时间回调 | Function | - | - |


### tips

可以通过slot的方式向list-view内容区域进行插入

```
<list-view class="list-view" :on-refresh="onRefresh" ref="listView" :on-scroll="onScroll"
	:on-infinite="onInfinite"
	:isEnd="isEnd">
	<div class="list-view-group">
		<div class="list-view-item flex-center-y" @click="toTop" v-for="(item, index) in list">
			<div class="avatar r-circle"></div>
			<div class="info flex-1" @click="toTop">{{`_mirror_ ${index}`}}</div>
		</div>
	</div>
</list-view>
```


