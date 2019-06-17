### 如何在java中处理float与double型精度，在加减乘除操作下都不会遗失精度？
#### 高精度使用BigDecimal进行处理
#### 大数使用BigInteger进行处理
---------------------

BigDecimal有4个够造方法，其中的两个用BigInteger构造，另一个是用double构造，还有一个使用String构造。
应该避免使用double构造BigDecimal，因为：有些数字用double根本无法精确表示，传给BigDecimal构造方法时就已经不精确了。比如，new BigDecimal(0.1)得到的值是0.1000000000000000055511151231257827021181583404541015625。
使用new BigDecimal("0.1")得到的值是0.1。因此，如果需要精确计算，用String构造BigDecimal，避免用double构造，尽管它看起来更简单！


--------------------- 

 equals()方法认为0.1和0.1是相等的，返回true，而认为0.10和0.1是不等的，结果返回false。方法compareTo()则认为0.1与0.1相等，0.10与0.1也相等。所以在从数值上比较两个BigDecimal值时，应该使用compareTo()而不是 equals()。

--------------------- 

BigDecimal bd = new BigDecimal();
在构造函数的参数可以是整数，浮点型，字符串  
bd.add();    
bd.sub();  
bd.mul();  
bd.div();  

--------------------- 

