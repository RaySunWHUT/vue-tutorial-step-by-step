

# CSS:

 This is a practice demo of css layout which learned from http://zh.learnlayout.com/toc.html.

You can read the web tutorial and run the code to see the layout effect.

**Recommend** the web tutorial to you.

![web]()

## CSS布局:

1. #### display属性:

   1. **block**: 

      块级元素，会新开始一行并尽可能地撑满容器。(如: div、p、form)

   2. **inline**: 

      行内元素，可以在段落中包裹文字，而不打乱段落的布局。(如: span、a)

   3. **none**:

      通常被Javascript用来在不删除元素的情况下，**隐藏**或显示元素。(如: script)

   4. other:
      1. list-item
      2. table
      3. inline-block
      4. flex

2. #### margin:

   ​    margin: 0 auto;

   ​	设置 **块级元素** 的 **width** 可以防止其从左到右撑满整个容器；设置左右 **外边距(margin)** 为 **auto** 使其水平居中。

   ​	**问题(Q)**: 若浏览器窗口比元素宽度窄，浏览器会显示 **水平滚动条** . 

   ​	**解决方案(S)**: max-width.

   margin: 上、右、下、左。

3. #### 盒子(box)模型:

   1. 外边距: margin
   2. 边框: border
   3. 内边距: padding
   4. 内容: content
   5. box-sizing: border-box; : 元素的 **内边距(padding)** 和 **边框(border)** 不增加元素整体宽度

   

   The box model show as follow, 

   ![box]()

   

4. #### 前缀: 启用特定浏览器中的私有特性

   1. `-webkit-`:

      `-webkit-`代表 **chrome**、**safari** 私有属性; 

   2.  `-moz-` :

      `-moz-`  代表 **firefox** 浏览器私有属性;

   3.  `-ms`:

       `-ms` 代表 **IE** 浏览器私有属性; 

   4. `-o`:

      `-o` 代表 **Opera** 私有属性;

5. **position**:

   1. #### static:

      position 属性的 **默认值**，不会被 “***positioned***”，其他值则表示会被 “***positioned***”。

   2. #### relative:

      1. 在 position 为 `relative` 的元素上设置 `top` 、 `right` 、 `bottom` 和 `left` 属性会使其偏离其正常位置。

      2. 其他元素的位置不会受该元素的影响发生 **位置改变**。

   3. #### fixed:

      1. 一个 position 为fixed 的元素会相对于 **视窗** 来定位，即便 **页面滚动**，它还是会停留在 **相同的位置**。和 `relative` 一样， `top` 、 `right` 、 `bottom` 和 `left` 属性都可用。

      2. 一个固定定位元素不会保留它原本在页面应有的空隙（脱离文档流）。

      **视窗**: 网页

   4. #### absolute:

      1. `absolute` 不是相对于 **视窗** 而是相对于 **最近的(nearest)** “**positioned**” 祖先元素进行定位。
      2. 如果 **position** 为 **absolute** 的元素没有 “**positioned**” 的祖先元素，那么它是相对于文档的 **body** 元素，并且它会随着 **页面滚动** 而移动。

 margin-left: 确保有足够的空间容纳其他元素。

 如果使用一个固定定位(fixed)的页眉或页脚，确保有足够的空间(margin-bottom)来显示它们

 5. #### float:

    **float** 用于实现 **文字环绕图片**。	

	6. #### clear:

    用于 **控制浮动**。

    使用 `clear` 可以将整个段落移动到浮动元素 `div` 下面。需要用 clear: `left` 值清除元素**向左浮动**。你还可以用 `right` 或 `both` 来清除 **向右浮动** 或同时清除 **向左向右浮动**。

7. #### 清除浮动(clearfix hack):

   若图片比包含它的元素还高， 而且它是浮动的，那么它就会溢出到容器外面！

8. #### 媒体查询:

   响应式设计(Responsive Design)，一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！

   ​	使用 **百分比宽度** 来布局，然后在浏览器变窄到无法容纳侧边栏中的菜单时，把布局显示成一列。

   

9. #### inline-block:

​       使用`float`创建网格铺满屏幕是一种方法，而使用 `inline-block` 会更简单。

10. #### inline-block 布局：

1. `vertical-align` 会影响到 `inline-block`，可能会把它的值设置为 **top**

2. 需设置每一列的 **宽度**

3. 若HTML源代码中的元素之间有空格，则列与列之间会产生空隙

11. #### column:

    实现文字 **多列布局** css属性:

    1. -moz-column-count

    2. -moz-column-gap

    3. -webkit-column-count

    4. -webkit-column-gap

    5. column-count

    6. column-gap

    CSS columns是很新的标准，使用时需加 **前缀**

    

12. #### flexbox

全新的 `flexbox` 布局模式可以用作 `CSS` 的布局方式。

但 `flex` 的规范变化频繁，各浏览器实现方式不同，所以需要加前缀。

1. flexbox **简单布局**:

   display: -webkit-flex;  

   display: flex;

2. flexbox **居中布局**:

​	**-webkit-align-items**: center;          

​	**align-items**: center;  

​	**-webkit-justify-content**: center;          

​	**justify-content**: center;

# References:

1. http://zh.learnlayout.com/toc.html
2. https://developer.mozilla.org/en-US/docs/Web/CSS/display
3. https://createaprowebsite.com/blog/mobile/fixed-position/
4. https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use
5. https://mediaqueri.es/
6. https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/
7. https://css-tricks.com/old-flexbox-and-new-flexbox/
8. https://bocoup.com/blog/dive-into-flexbox
9. https://quirksmode.org/css/columns/

