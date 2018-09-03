# Popup

## 使用指南
```
import {Popup} from 'mona'
```

## 代码演示

### • 底部弹出

通过设置placement属性来控制弹出点


```
export default {
		name: 'PopupDemo',

		components: {
			DemoPage,
			DemoSection,
			DemoButton,
			Popup
		},

		data () {
			return {
				visible: false,
				animate: true,
				placement: '',
				demo1Visible: false,
				demo2Visible: false,
				demo3Visible: false,
				demo4Visible: false,
				demo5Visible: false
			}
		},

		methods: {
			demo1 () {
				this.demo1Visible = true
			},

			demo2 () {
				this.demo2Visible = true
			},

			demo3 () {
				this.demo3Visible = true
			},

			demo4 () {
				this.demo4Visible = true
			},

			demo5 () {
				this.demo5Visible = true
			},
			hidePopup () {
				this.demo1Visible = false
				this.demo2Visible = false
				this.demo3Visible = false
				this.demo4Visible = false
				this.demo5Visible = false
			}
		}
	}
```

```
// 顶部弹出
<popup :visible="demo2Visible" placement="top" :onClose="hidePopup">
	<div style="height: 286px" class="flex f-dir-top f-center">
		<div class="p-b-10">顶部弹出</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>

// 底部弹出
<popup :visible="demo1Visible" placement="bottom" :onClose="hidePopup">
	<div style="height: 286px" class="flex f-dir-top f-center">
		<div class="text-center p-b-10">底部弹出</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>

// 右侧弹出

<popup :visible="demo3Visible" placement="right" :onClose="hidePopup">
	<div class="flex f-dir-top f-center" style="height: 100vh">
		<div style="width: 200px" class="text-center p-b-10 p-t-10">右侧弹出</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>

```

### • 是否展示动画效果

通过animate属性来控制是否有动画弹出效果

```
<popup :visible="demo4Visible" placement="bottom" :onClose="hidePopup" :animate="false">
	<div style="height: 286px" class="flex f-dir-top f-center">
		<div class="text-center p-b-10">无动画效果</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>
```

### • 禁止蒙层点击关闭

通过maskClosable属性来控制是否允许背景点击关闭

```
<popup :visible="demo5Visible" placement="bottom" :onClose="hidePopup" :maskClosable="false">
	<div style="height: 286px" class="flex f-dir-top f-center">
		<div class="text-center p-b-10">禁止蒙层点击关闭</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>
```


## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| visible | 控制打开关闭 | Boolean | false | - |
| placement | 控制弹出点 | String | bottom | `bottom` `left` `right`|
| maskClosable | 是否允许背景点击关闭 | String | 确定 | - |
| isHaveMask | 是否显示背景蒙层 | Boolean | true | - |
| animate | 是否展示动画效果 | Function | - | - |
| onClose | 点击蒙层关闭的回调 | Boolean | true | - |

### tips

可以通过slot的方式向popup内容区域进行插入

```
<popup :visible="demo2Visible" placement="top" :onClose="hidePopup">
	<div style="height: 286px" class="flex f-dir-top f-center">
		<div class="p-b-10">顶部弹出</div>
		<DemoButton @click.native="hidePopup" text="关闭"></DemoButton>
	</div>
</popup>
```


