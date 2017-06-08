[![GitHub version](https://badge.fury.io/gh/kbdsbx%2Fbrush.svg)](https://badge.fury.io/gh/kbdsbx%2Fbrush)  [![npm version](https://badge.fury.io/js/less-brush.svg)](https://badge.fury.io/js/less-brush)  [![NuGet version](https://badge.fury.io/nu/kbdsbx%2Fbrush.svg)](https://badge.fury.io/nu/kbdsbx%2Fbrush)

# [Brush](http://git.zhaoyi.me)

一个Less样式库，封装组合原始css
A library for styles which boxed original css by less.

### 可用class / Can used the classes.
```css

/**    简单样式    **/
/**    simply styles    **/


// colors:
.highlight, .highlight-bg, .highlight-bd
.hl, .hl-bg, .hl-bd
.white, .white-bg, .white-bd
.black, .black-bg, .black-bd
.gray, .gray-bg, .gray-bd
.hoary, .hoary-bg, .hoary-bd
.trans, .trans-bg, .trans-bd
.red, .red-bg, .red-bd
.green, .green-bg, .green-bd

```
![Colors](https://github.com/kbdsbx/brush/blob/master/data/2017-06-08_093809.png)

```css

// display:
.none, .block, .inline, .inline-block, .table, .flex, .display-unset

// flex:
.flex.space-between, .flex.center, .flex.start, .flex.end, .flex.align-center, .flex.align-start, .flex.align-end, .flex.wrap, .flex.column

// alignment:
.block-center, .vertical-center, .text-center, .text-left, .text-right

// position:
.static, .absoulte, .relative, .fixed
.left, .right, .top, .bottom
.z-high, .z-middle, .z-low, .z-normal, .z-floor
.z-higher-then-your-dont-where-to-go

// padding:
.padding-[directions]-[multiples], .pd-[dir]-[multiples]
.padding, .padding-x4, .padding-left-x2, .padding-right-half, .padding-top-quarter, .padding-bottom-x16
.pd, .pd-x4, .pd-lt-x2, .pd-rt-half, .pd-tp-quarter, .pd-bt-x16

// margin:
.margin-[directions]-[multiples], .mg-[dir]-[multiples]

// border:
.border-[directions]-[multiples], .bd-[dir]-[multiples]

// outline:
.outline-[multiples], .ot-[multiples]

// border style:
.solid, .dotted, .dashed, .double

// border radius:
.radius-no, .radius, .circle

// box shadow:
.shadow-none

// float:
.pull-left, pull-right, clear-left, clear-right, clear-both
.pl-lf, pl-rt, cl-lf, cl-rt, cl-bt
.clearfix

// width:
.auto, .full, half, quarter, third
.w-auto, .w-full, .w-half, .w-quarter, .w-third

// height;
.h-auto, .h-full, .h-half, .h-quarter, .h-third

// overflow:
.overflow-hidden, overflow-auto, overflow-scroll
.of-hd, .of-ot, .of-sl
.of-hd-x, .of-ot-x, .of-sl-x
.of-hd-y, .of-ot-y, .of-sl-y

// box shadow
.shadow-none

// text decoration
.udl, .orl, .thl, .nl

// font weight
.lighter, .bold

// font style
.italic

// font reset
.normal

// font size
.font-[size]
.font-8, .font-10, .font-12 ... .font-50

// all class can prefixed media width for short that act on all of different driver width, except colors;
// prefix : [mxs, ms, mm, ml, mxl, xs, s, m, l, xl]
// e.g.
.xs-font-8, .mxs-none, .l-pd-left-no

// opacity
.transparent, .opacity

// pointer-events
.events-none, .events-all, .events-auto

// cursor
.pointer

```

### 可用的方法 / Can used the functions
```css
/**    媒体查询    **/
/**    media selection    **/


/**
 * 最小宽度在320px的所有设备上生效
 * effect on devices which width minimum then 320px.
 **/
.mxs( {
    ...
} );
/**
 * 最小宽度在375px的所有设备上生效
 * effect on devices which width minimum then 375px.
 **/
.ms( {
    ...
} );
/**
 * 最小宽度在414px的所有设备上生效
 * effect on devices which width minimum then 414px.
 **/
.mm( {
    ...
} );
/**
 * 最小宽度在768px的所有设备上生效
 * effect on devices which width minimum then 768px.
 **/
.ml( {
    ...
} );
/**
 * 最小宽度在1024px的所有设备上生效
 * effect on devices which width minimum then 1024px.
 **/
.mxl( {
    ...
} );
/**
 * 最小宽度在1280px的所有设备上生效
 * effect on devices which width minimum then 1280px.
 **/
.xs( {
    ...
} );
/**
 * 最小宽度在1366px的所有设备上生效
 * effect on devices which width minimum then 1366px.
 **/
.s( {
    ...
} );
/**
 * 最小宽度在1440px的所有设备上生效
 * effect on devices which width minimum then 1440px.
 **/
.m( {
    ...
} );
/**
 * 最小宽度在1600px的所有设备上生效
 * effect on devices which width minimum then 1600px.
 **/
.l( {
    ...
} );
/**
 * 最小宽度在1920px的所有设备上生效
 * effect on devices which width minimum then 1920px.
 **/
.xl( {
    ...
} );


/**    装饰    **/
/**    ornament    **/


/**
 * 带边框的装饰角
 * arrow with border.
 *
 * @width : 装饰角宽度
 * @position : 装饰角位置
 *      left
 *      right
 *      top
 *      bottom
 * @border-color : 装饰角边框颜色
 *      @default    @gray
 * @background-color : 装饰角背景颜色
 *      @default    @white
 * @border-width : 装饰角边框宽度
 *      @default    1px
 **/
.arrow ( @width; @position; @border-color; @background-color: @white; @border-width )

/**
 * 无边框的装饰角
 * arrwo without border.
 *
 * @width : 装饰角宽度
 * @position : 装饰角位置
 *      left
 *      right
 *      top
 *      bottom
 * @background-color : 装饰角背景颜色
 *      @default    @white
 **/
.arrow-full ( @width; @position; @background-color )

/**
 * 装饰线
 * line between contents.
 *
 * @text-length : 内容文本字数
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.line ( @text-length; @width; @color )

/**
 * 左装饰线
 * left line.
 *
 * @text-length : 内容文本字数
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.line-left ( @text-length; @width; @color )

/**
 * 右装饰线
 * right line.
 *
 * @text-length : 内容文本字数
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.line-right ( @text-length; @width; @color )

/**
 * Flex装饰线
 * line between contents use as flex.
 *
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.flex-line ( @width; @color )

/**
 * Flex左装饰线
 * left line use as flex.
 *
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.flex-line-left ( @width; @color )


/**
 * Flex右装饰线
 * right line use as flex.
 *
 * @width : 装饰线宽度
 *      @default : 1px
 * @color : 装饰线颜色
 *      @default : @gray
 **/
.flex-line-right ( @width; @color )

/**
 * 灯光阴影
 * light shadow.
 *
 * @width: 阴影宽度
 *      @default : 100%
 * @height : 阴影高度
 *      @default : 5px
 * @top : 阴影距本体距离
 *      @default : 10px
 * @color : 阴影颜色
 *      @default : @hoary
 **/
.shadow ( @width; @height; @top; @color )


/**
 * 已选装饰
 * border and badge for selections.
 *
 * @position: 装饰位置
 *      tr : top right
 *      tl : top left
 *      br : bottom right
 *      bl : bottom left
 *      @default : tr
 * @size: 装饰宽度
 *      @default : 30px
 * @bg-color: 装饰颜色
 *      @default : @hl
 * @color: 装饰文字颜色
 *      @default : @white
 * @content: 装饰内容（推荐使用单一文字或字符）
 *      @default : "\2714"
 **/
.choose-badge ( @position; @size; @bg-color; @color; @content ) 

/**
 * 文字阴影（3D）
 * fonts shadow (3D)
 *
 * @deeps : 阴影深度
 *      @default : 5px;
 * @deg : 阴影角度，可用任何表示角度或弧度的数值类型
 *      @default : 45deg;
 * @color-form : 阴影起始颜色，靠近文字
 *      @default : @hl;
 * @color-to : 阴影结束颜色，远离文字
 *      @default : @hl;
 **/
.text-shadow ( @deeps; @deg; @color-form; @color-to; )

/**
 * 滚动条
 * scrollbar.
 *
 * @width: 滚动条宽度
 *      @default : 5px
 * @color: 滚动条滚动块颜色
 *      @default : @hl
 * @bg-color: 滚动条轨道区颜色
 *      @default : @white
 * @radius: 滚动条滚动块圆弧
 *      @default : 0
 **/
.scrollbar( @width; @color; @bg-color; @radius; ) {



/**    动画    **/
/**    animation    **/


/**
 * 简单动画
 * simply animation.
 *
 * @class : 需要添加动画的css属性
 * @duration : 动画持续时长
 *      @default : 300ms
 **/
.ani ( @class, @duration )

/**
 * 动画延迟
 * animation delayer.
 *
 * @delay : 延迟时长
 **/
.delay ( @delay )

/**
 * 将一组节点间隔相同时长进行延长
 * the animation that delay with each item in a group spaced same time.
 *
 * @base : 基础延长时长
 * @steps : 每个节点比上一个节点增加的延长时间
 * @len : 节点数
 **/
.delay ( @base, @steps, @len )

/**
 * 节点缓动显示
 * fade out.
 *
 * @direction : 方向
 *      ltr : 从左往右
 *      rtl : 从右往左
 *      ttb : 从上往下
 *      btt : 从下往上
 * @duration : 持续时间
 *      @default : 200ms
 **/
.fade-out ( @direction; @duration )

/**
 * 节点缓动隐藏
 * fade in.
 *
 * @direction : 方向
 *      ltr : 从左往右
 *      rtl : 从右往左
 *      ttb : 从上往下
 *      btt : 从下往上
 * @duration : 持续时间
 *      @default : 200ms
 * @length : 缓动距离
 *      @default : 10px;
 **/
.fade-in ( @direction; @duration; @length )


```

# License
[ISC](http://spdx.org/licenses/ISC)
