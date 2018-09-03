# DatePickerRange

✨✨ 便捷的时间范围选择器

## 使用指南
```
import {DatePickerRange} from 'mona'
```

## 代码演示

### •  设置开始和结束范围的时间

```
export default {
		name: 'DatePickerRangeDemo',

		components: {
			DemoPage,
			DemoSection,
			DemoButton
		},

		data () {
			return {
				start: '',
				end: ''
			}
		},

		methods: {
			demo1 () {
				let start = Util.moment(this.start).valueOf()
				let end = Util.moment(this.end).valueOf()

				DatePickerRange.config({
					date: {
						start: start,
						end: end
					},
					onOk: (data) => {
						this.start = Util.moment(data.start).format('YYYY-MM-DD')
						this.end = Util.moment(data.end).format('YYYY-MM-DD')
						Tool.info(`选中开始时间${Util.moment(data.start).format('YYYY-MM-DD HH:mm:ss')}, 结束时间${Util.moment(data.end).format('YYYY-MM-DD HH:mm:ss')}`)
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
| date | 初始化设定时间，start和end属性接受13位（ms）时间戳 | Object | {start: '', end: ''} 当前时间戳 | - |
| onOk | 点击确认之后的回调，start和end属性返回13位（ms）时间戳 | Function | - | - |
| onCancel | 点击取消之后的回调 | Function | - | - |



