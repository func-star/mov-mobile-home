# Toast

## 使用指南
```
import {Toast} from 'mona'
```

## 代码演示

### • 文字提示

通过`message`属性来设置提示文案


```
Toast.show('普通提示')
```

### • 成功提示

通过设置type: 'success'属性来展示成功类型提示

```
Toast.show({
	message: '成功提示',
	type: 'success'
	})
```

### • 自定义提示持续时间

通过设置`duration`属性来修改提示展示时间

```
Toast.show({
	message: '提示3s',
	duration: 3000
	})
```

### • 添加回调函数

```
Toast.show({
	message: '带回调的提示', onHide () {
			Toast.show({
				message: '回调', type: 'error'
			})
		}
	})
```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| message | 提示信息 | String | 0 | - |
| duration | 持续展示事件(ms) | Number | 2000 | - |
| type | 信息类型 | String | info | `success` `error` `info` |
| onHide | 显示结束后的回调 | Function | - | - |
