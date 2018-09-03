# Carousel

## 使用指南
```
import {Carousel} from 'mona'

const CarouselItem = Carousel.Item
```

## 代码演示

### • 自动循环播放

```
<carousel class="" :afterChange="afterChange" :defaultIndex="0" :loop="true" :childWidth="300">
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_1j6a0f30hcc36k464ikhakj0cbaeg_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_41l88h92fl116bk0kdl4lklk6d0ia_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_46glh9ch5l7afde25485e5a8k76jf_1350x578.jpg" />
	</carousel-item>
</carousel>
```

### • 自动循间隔5s环播放

通过设置autoplayInterval来控制是轮播间隔

```
<carousel class="" :afterChange="afterChange" :defaultIndex="0" :loop="true" :childWidth="300" :autoplayInterval="5000">
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_1j6a0f30hcc36k464ikhakj0cbaeg_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_41l88h92fl116bk0kdl4lklk6d0ia_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_46glh9ch5l7afde25485e5a8k76jf_1350x578.jpg" />
	</carousel-item>
</carousel>
```

### • 不自动循环播放

通过设置loop来控制是否允许循环轮播

```
<carousel class="" :afterChange="afterChange" :defaultIndex="0" :autoplay="false" :childWidth="300">
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_1j6a0f30hcc36k464ikhakj0cbaeg_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_41l88h92fl116bk0kdl4lklk6d0ia_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_46glh9ch5l7afde25485e5a8k76jf_1350x578.jpg" />
	</carousel-item>
</carousel>
```

### • 初始化在第二屏

通过defaultIndex控制是初始化出现在第几屏

```
<carousel class="" :afterChange="afterChange" :defaultIndex="1" :autoplay="false" :childWidth="300">
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_1j6a0f30hcc36k464ikhakj0cbaeg_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_41l88h92fl116bk0kdl4lklk6d0ia_1350x578.jpg" />
	</carousel-item>
	<carousel-item style="padding: 3px 10px;">
		<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_46glh9ch5l7afde25485e5a8k76jf_1350x578.jpg" />
	</carousel-item>
</carousel>
```

## API


| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| beforeChange | 在视图切换之前触发 | Function | - | - |
| afterChange | 在视图切换之后触发	 | Function | - | - |
| canPan | 是否允许手势左右滑动切换视图 | Boolean | true | - |
| loop | 是否允许循环播放 | Boolean | false | - |
| autoplay | 是否自动轮播 | Boolean | true | - |
| autoplayInterval | 自动轮播时间间隔 | Number | 3000 | - |
| dots | 是否展示默认下标小圆点 | Boolean | true | - |
| defaultIndex | 默认定位在第几个视图 | Number | - | 0 |
| childWidth | 每次切换的区域宽度 | Number | 0 | - |

### tips

可以通过slot的方式向carousel-item内容区域进行插入

```
<carousel-item style="padding: 3px 10px;">
	<img class="full" src="https://s10.mogucdn.com/mlcdn/c45406/170804_1j6a0f30hcc36k464ikhakj0cbaeg_1350x578.jpg" />
</carousel-item>
```


