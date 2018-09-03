# ModalSelect

## 使用指南
```
import {ModalSelect} from 'mona'
```

## 代码演示

### • 基础用法


```
export default {
		name: 'ModalSelect',

		components: {
			DemoPage,
			DemoSection,
			DemoButton,
			ModalSelect
		},

		data () {
			return {
				demo1Value: undefined
			}
		},

		methods: {
			demo1 () {
				ModalSelect.config({
					source: [{
						n: 'item - 1', v: 1
					}, {
						n: 'item - 2', v: 2
					}, {
						n: 'item - 3', v: 3
					}, {
						n: 'item - 4', v: 4
					}, {
						n: 'item - 5', v: 5
					}],
					defaultValue: this.demo1Value,
					nameKey: 'n', // 默认 name
					valueKey: 'v', // 默认 value
					onConfirm: (data) => {
						console.log(data)
						this.demo1Value = data.v
					}
				})
			}
		}
	}
```

### • 默认选择第二项

通过defaultValue自定义一开始显示的页数

```
export default {
		name: 'ModalSelect',

		components: {
			DemoPage,
			DemoSection,
			DemoButton,
			ModalSelect
		},

		data () {
			return {
				demo2Value: 2,
			}
		},

		methods: {
			demo2 () {
				ModalSelect.config({
					source: [1, 2, 3, 4, 5, 6],
					defaultValue: this.demo2Value,
					isKV: false,
					onConfirm: (data) => {
						console.log(data)
						this.demo2Value = data
					},
					onCancel: (type) => {
						console.log(type)
					}
				})
			}
		}
	}
```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| isKV | 是否开始对象的key,value映射 | Boolean | true | - |
| source | 数据源 | Array | [] | - |
| nameKey | 取对象中name的值 | String | name | - |
| valueKey | 取对象中value的值 | String | value | - |
| defaultValue | 一开始选中的默认数据 | Number | - | - |
| onConfirm | 确认选中后的回调 | Function | - | - |

