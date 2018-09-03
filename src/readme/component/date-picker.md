# DatePicker

✨✨省心实用的时间选择组件

## 使用指南
```
import {DatePicker} from 'mona'
```

## 代码演示

### • 时间弹层选择器,通过date属性可以初始化设定默认时间


```
	export default {
		name: 'PickerSelectDemo',

		components: {
			DemoPage,
			DemoSection,
			DemoButton
		},

		methods: {
			demo1 () {
				let defaultDate = Util.moment(this.value).valueOf()

				DatePicker.config({
					format: 'second',
					date: defaultDate,
					onOk: (data) => {
						this.value = Util.moment(data).format('YYYY-MM-DD HH:mm:ss')
						Tool.info(`选中了时间${this.value }`)
					},
					onCancel: () => {
						Tool.info('取消了选择')
					}
				})
			}

		}
	}
```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| date | 初始化设定时间，接受13位（ms）时间戳	 | Number | - | - |
| onOk(date) | 点击确认之后的回调，返回13位（ms）时间戳 | Function | - | - |
| onCancel(type) | 点击取消之后的回调 | Function | - | - |

