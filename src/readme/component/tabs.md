# Tabs

✨✨支持手势滑动的tabs组件

## 使用指南
```
import {Tabs} from 'mona'

const TabItem = Tabs.item
```

## 代码演示

### • 基础用法

```
<tabs class="tabs" :tabs="tabs" :defaultIndex="0" :afterChange="afterChange">
	<tabs-item class="flex f-center">
		<div style="height: 50px">第一个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div>第二个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div>第三个面板</div>
	</tabs-item>
</tabs>
```

### • 调用api切换面板,初始化在第二面板

通过confirmText和cancelText属性来自定义确认和取消文案

```
<tabs class="tabs" :tabs="tabs" ref="tabs" :defaultIndex="1" :afterChange="afterChange">
	<tabs-item class="flex f-center">
		<div style="height: 50px" @click="onChangeTab">切换至第一个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div style="height: 50px" @click="onChangeTab">切换至第一个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div style="height: 50px" @click="onChangeTab">切换至第一个面板</div>
	</tabs-item>
</tabs>

export default {
		components: {
			DemoPage,
			DemoSection,
			Tabs,
			TabsItem
		},

		props: {},

		data () {
			return {
				tabs: [
					{ title: 'Tab - 1' },
					{ title: 'Tab - 2' },
					{ title: 'Tab - 3' }
				]
			}
		},

		methods: {
			afterChange (index) {
				console.log(index)
			},
			onChangeTab () {
				this.refs.tabs.changeIndex(0)
			}
		}
	}
```

### • 禁用手势

通过footer控制是否显示底部，

```
<tabs class="tabs" :canPan="false" :tabs="tabs" ref="tabs" :defaultIndex="0" :afterChange="afterChange">
	<tabs-item class="flex f-center">
		<div style="height: 50px">第一个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div>第二个面板</div>
	</tabs-item>
	<tabs-item class="flex f-center">
		<div>第三个面板</div>
	</tabs-item>
</tabs>
```


## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| beforeChange | 在视图切换之前触发 | Function | - | - |
| afterChange | 在视图切换之后触发 | Function | - | - |
| canPan | 是否允许手势左右滑动切换视图 | Boolean |  true | - |
| defaultIndex | 默认定位在第几个视图 | Number | 0 | - |
| tabs | 头部切换栏，不传则隐藏 | Array | - | - |


### tips

可以通过slot的方式向tabs-item内容区域进行插入

```
<tabs-item class="flex f-center">
	<div style="height: 50px">第一个面板</div>
</tabs-item>
```


