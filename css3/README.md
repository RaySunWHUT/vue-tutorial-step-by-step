# CSS3:

1. 选择器

   

2. 2D 转换:

   #### transform 属性

   1. translate()
   2. rotate()
   3. scale()
   4. skew()
   5. matrix()

3. 3D 转换:

   1. rotateX()
   2. rotateY()

4. 过渡

   #### transition属性

   ```css
   transform: none|transform-functions;
   ```

   transform-functions:

   1. translateX(x): 定义转换，只是用 X 轴的值
   2. translateY(y): 定义转换，只是用 Y 轴的值

5. 动画

   #### 1. @keyframes规则

   @keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。

   ```css
   @keyframes animationName {
       // 0%
       from {
           background: violet;
       }
       // 100%
       to {
           background: greenyellow;
       }
   }
   ```

   在 @keyframes 中创建动画后，将其捆绑到某个 **选择器**，否则不会产生动画效果。

   同时需要规定以下 2 项 CSS3 动画属性:

   1. 动画名称 (animationName)

   2. 动画时长 (time)

      

   用 **百分比(%)** 来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

   

   #### 2. animation 属性
   ```css
   // 名称 动画时长 时间函数(linear ease-in-out) 延迟 迭代次数 动画方向 fill-mode(动画在播放之前或之后，其动画效果是否可见)
   animation: name duration timing-function delay iteration-count direction fill-mode;
   ```


# References:

1. https://www.w3school.com.cn/cssref/pr_transition-timing-function.asp
2. https://www.w3school.com.cn/cssref/css_selectors.asp

