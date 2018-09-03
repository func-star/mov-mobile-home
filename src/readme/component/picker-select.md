# PickerSelect

✨✨弹框数据滚动选择器

## 使用指南
```
import {PickerSelect} from 'mona'
```

## 代码演示

### • 基础用法

通过title属性来控制头部文案，也可以传递节点类型来自定义 若不传title则隐藏头部


```
<picker-select :visible="visible" :source="source" keyType="value" :defaultValue="value" :onChange="getValue"
			:onClose="close"></picker-select>


export default {
	name: 'PickerSelectDemo',

	components: {
		DemoPage,
		DemoSection,
		DemoButton,
		PickerSelect
	},

	props: {},

	data () {
		return {
			value: '2018年',
			visible: false,
			source: []
		}
	},

	methods: {
		demo1 () {
			this.visible = true
		},
		getValue (val) {
			this.value = val
			Tool.info(`选择了${val}`)
		},
		close () {
			this.visible = false
		}
	},

	created () {
		for (let i = 0; i < 100; i++) {
			this.source.push(2000 + i + '年')
		}
	},
}
```


## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| keyType | 数据源的解析方式 | String | key-value | `key-value` `value` |
| source |  数据源 | Array | [] | - |
| nameKey | 取对象中name的值 | String | name | - |
| defaultValue | 一开始选中的默认数据 | Number | - | - |
| onChange | 修改选中值时的回调 | Function | - | - |
| onClose | 关闭弹窗的回调 | Function | - | - |



