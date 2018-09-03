# Modal

## 使用指南
```
import {Modal} from 'mona'
```

## 代码演示

### • 自定义title模板

通过title属性来控制头部文案，也可以传递节点类型来自定义 若不传title则隐藏头部


```
<Modal :visible="demo1Visible" title="<span style='color: red'>自定义用法</span>" :onClose="cancel"
		:onConfirm="confirm">
		<div>自定义title模板</div>
</Modal>
```

### • 自定义确认和取消文案，无title

通过confirmText和cancelText属性来自定义确认和取消文案

```
<Modal :visible="demo2Visible" confirmText="请确认" cancelText="请取消" :onClose="cancel"
			:onConfirm="confirm">
		<div>自定义确认和取消文案，无title</div>
</Modal>
```

### • 自定义底部，点击蒙层关闭

通过footer控制是否显示底部，

```
<Modal :visible="demo3Visible" :footer="false" :onClose="cancel" title="自定义用法" :onConfirm="confirm">
		<div>demo3 - 自定义底部，点击蒙层关闭</div>
</Modal>
```

### • 点击蒙层不关闭

通过maskClosable控制是否点击蒙层要关闭弹窗

```
<Modal :visible="demo4Visible" :onClose="cancel" :onConfirm="confirm" :maskClosable="false">
		<div>demo4 - 点击蒙层不关闭</div>
</Modal>
```

### • 无取消按钮

通过enableCancel控制是否显示取消按钮

```
<Modal :visible="demo5Visible" :onClose="cancel" :onConfirm="confirm" :enableCancel="false">
	  <div>demo5 - 无取消按钮</div>
</Modal>
```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| visible | 控制打开关闭 | Boolean | false | - |
| cancelText | 取消文案 | String | 取消 | - |
| confirmText | 确定文案 | String | 确定 | - |
| isHaveMask | 是否显示背景蒙层 | Boolean | true | - |
| enableCancel | 是否展示取消按钮 | Boolean | true | - |
| maskClosable | 是否允许背景点击关闭 | Boolean | true | - |
| onConfirm | 点击确认之后的回调 | Function | - | - |
| onCancel | 点击取消之后的回调 | Function | - | - |
| footer | 是否需要底部bar | Boolean | true | - |
| title | 	头部展示视图或者文案	 | `String` `node`| true | - |
| onClose | 弹窗关闭时的回调 | Function | - | - |

### tips

可以通过slot的方式向弹窗内容区域进行插入

```
<Modal :visible="demo4Visible" :onClose="cancel" :onConfirm="confirm" :maskClosable="false">
		<div>demo4 - 点击蒙层不关闭</div>
</Modal>
```


