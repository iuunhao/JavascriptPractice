> 注意: 没有说明替换原始值，说明不修改原始值，只是返回一个新的值。

* ### String(字符串)
    * #### `charAt()` ---- 返回指定位置的字符

        ```javascript
            var str = 'iuunhao';
            str.charAt(1) // "u"

            //输入的索引位置大于字符串长度返回空字符 ""
        ```

    * #### `charCodeAt()` ---- 返回指定位置字符的Unicode值

        ```javascript
            var str = 'iuunhao';
            str.charCodeAt(1); // 117

            //输入的索引位置大于字符串长度返回NaN
        ```

    * #### `concat()` ---- 字符串链接

        ```javascript
            var str1 = 'hello ',
                str2 = 'iuunhao';
            str1.concat(str2); // "hello iuunhao"
        ```

    * #### `indexOf()` ---- 查找字符串所在的位置

        ```javascript
            var str = 'iuunhao';
            str.indexOf('u'); // 1

            //没有找到返回 -1,如果存在重复字符返回第一个匹配出现的位置
        ```

    * #### `lastIndexOf()` ---- 从后向前搜索字符所在位置

        ```javascript
            var str = 'hello iuunhao 2016';
            str.lastIndexOf('2016'); // 14

            //没有找到返回 -1
            //永远只会返回第一个匹配的位置
            //支持正则匹配，但忽略全局匹配
            //默认对大小写敏感,可以通过`i`来忽略大小敏感匹配
            //需要注意的是虽然是从后向前查找，但是返回的索引依然是前到后来排列的
        ```

    * #### `search()` ---- 检索字符串所在的位置
        ```javascript
            var str1 = 'iuunhao',
                str2 = '2016';
                str1.search('iuun', str2); // "2016hao"

            //如果没有匹配到字符串，则返回原始字符符串
        ```

    * #### `match()` ---- 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

        ```javascript
            var str = '2016iuunhao1991';
            str.match(/\d+/g); //["2016", "1991"]
            str.match(/\d+/); //["2016"]
            str.match("hello"); //null

            //需要注意的返回的是一个数组，如果不带`g`（全局匹配）只会返回`第一次匹配`到的内容
            //如果没有匹配到内容返回`null`
        ```    

    * #### `replace()` ---- 查找匹配(固定字符 || 正则)到的字符串并且通新的字符串替换
    
        ```javascript
            var str1 = 'iuunhao',
                str2 = '2016';
                str1.replace('iuun', str2); // "2016hao"

            //如果没有匹配到字符串，则返回原始字符符串
        ```

    * #### `slice()` ---- 提取字符串某个部分

        ```javascript
            var str = 'hello iuunhao';
            str.slice(0, 4); // "hello"
            str.slice(6, str.length); // "iuunhao"
            str.slice(-3); // "hao"
            str.slice(0, -4); // "hello iuu"
            str.slice(0); // "hello iuunhao"

            //第一个参数起始位置，第二个参数结束位置
            //如果只传一个参数表示从当前位置截取到字符串结束的位置
            //如果第一个参数为负数，表示从后截取
        ```

    * #### `split()` ---- 将字符串通过指定方式分割成数组
    
        ```javascript
            var str1 = 'iuunhao',
                str2 = 'hello    iuunhao             2016';
            str1.split(''); //["i", "u", "u", "n", "h", "a", "o"];
            str2.split(/\s+/) //["hello", "iuunhao", "2016"]

            //支持正则分割
        ```
    * #### `substr()` ---- 在字符串中抽取从参数一下标开始的指定数目的字符

        ```javascript
            var str = 'iuunhao';
            str.substr(2, 3); // "unh"

            //-1代表最后一个字符, -2代表倒数第二个字符的位置
        ```

    * #### `substring()` ---- 用于提取字符串中介于两个指定下标之间的字符

        ```javascript
            var str = 'iuunhao';
            str.substring(0, 3); //"iuu"
            str.substring(3); //"nhao"

            //参数不能为负数
        ```

    * #### `toLocaleLowerCase()` ---- 把字符串转换为小写

        ```javascript
            var str = 'IUUNHAO';
            str.toLocaleLowerCase(); // "iuunhao"

            //和toLowerCase()一样,除了特殊语言基本用不到所以用哪个都可以
        ```

    * #### `toLocaleUpperCase() ` ---- 把字符串转换为小写

        ```javascript
            var str = 'iuunhao';
            str.toLocaleUpperCase(); // "IUUNHAO"

            //和toUpperCase()一样,除了特殊语言基本用不到所以用哪个都可以
        ```
    

* ### Array(数组)

    * #### `unshift()`  ---- 在数组头部添加一个或多个元素

        ```javascript
            var arr = [1, 2, 3, 4];
            arr.unshift('a'); // 5  
            arr // ['a', 1, 2, 3, 4]
           
           //此方法会修改原始数组 
        ```

    * #### `shift()`  ---- 删除并返回数组索引为0的元素

        ```javascript
            var arr = [1, 2, 3, 4];
            arr.shift(); // 1 
            arr; //[2, 3, 4]
           
           //此方法会修改原始数组 
        ```

    * #### `push()`  ---- 在数组尾部添加或多个元素 

        ```javascript
            var arr = [1, 2, 3, 4];
            arr.push('a'); // 5 
            arr; //[1, 2, 3, 4, 'a']
           
           //此方法会修改原始数组 
        ```

    * #### `pop()`  ----  删除并返回数组最后一个元素

        ```javascript
            var arr = [1, 2, 3, 4];
            arr.pop(); // 4 
            arr; //[1, 2, 3]
           
           //此方法会修改原始数组 
        ```

    * #### `join()`  ---- 将数组通过特定内容拼接成一个字符串
        ```javascript
            var arr = ['i', 'u', 'u', 'n', 'h', 'a', 'o'];
            arr.join(''); // "iuunhao";
            arr.join('-'); // "i-u-----unhao"

        ```
    
    * #### `slice()` ---- 从已有数组中返回选定元素

        ```javascript
            var arr = ['a', 'b', 'c', 'd', 'e'];
            arr.slice(-3, -1); //['c', 'd'];

            //第一个参数用来确定选取的其实位置
            //第二个参数用确定结束的位置
            //如果为负数从后往前截取
            //截取的数量不包含结束位置的元素

        ```

    * #### `splice()` ---- 从数组中添加|删除元素，然后返回删除项目
        
        ```javascript
            var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
            arr.splice(1,2); //['b', 'c']
            console.log(arr) // ['a', 'd', 'e', 'f'];
            arr.splice(1,0, 'iuunhao'); //[]
            console.log(arr)  //["a", "iuunhao", "d", "e", "f"]

           //此方法会修改原始数组
           //如果第二个参数为0，代表不删除任何元素
        ```

    * #### `reverse()`  ---- 用于颠倒数组顺序

        ```javascript
            var arr = ['a', 'b', 'c'];
            arr.reverse() // ["c", "b", "a"]
            :w

            //此方法会修改原始数组
        ```
    
    * #### `sort()`

        ```javascript
            var arr = [1, 'a', 32, 4, 'g', 100, 9, 22];
            //arr.sort(arr) //[1, 100, 22, 32, 4, 9]
            arr.sort(function(a, b){
                return a-b;
            }); //[1, 4, 9, 22, 32, 100]
        
            //此方法会修改原始数组
            // a-b 从小到大排序
            //若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
            //若 a 等于 b，则返回 0。
            //若 a 大于 b，则返回一个大于 0 的值。
        ```
        排序是根据[ASCII码](http://t.cn/RfHAAq6)排序

    * #### `concat()` ---- 链接两个数组

        ```javascript
            var arr1 = [1, 2, 3, 4],
                arr2 = ['a', 'b', 'c', 'd'];
            arr1.concat(arr2); //[1, 2, 3, 4, "a", "b", "c", "d"]
            arr1.concat('a', 'b') // [1, 2, 3, 4, "a", "b"]

            //会自动将concat的参数转换成数组
        ```

* ### Number(数字)

    * #### `toFixed()` ---- 指定小数位数
        
        ```javascript
            var number = 123.123123;
            number.toFixed(3); //"123.123"
            number.toFixed(10); //"123.1231230000"

            //返回的是一个字符串并非数字
            //toFixed参数取值范围必须在0 ~ 20之间，否则会抛出RangeError
        ```

    * #### `toPrecision()` ---- 格式化数字为指定长度

        ```javascript
            var number = 1234567;
            number.toPrecision(3); //1230000

            //截取参数长度，其他用0替换
        ```

* ### Date(日期)
    
    * #### `Date()`  ---- 返回当日的日期和时间
    * #### `getDate()`	从 Date 对象返回一个月中的某一天 (1 ~ 31)
    * #### `getDay()`	从 Date 对象返回一周中的某一天 (0 ~ 6)
    * #### `getMonth()`	从 Date 对象返回月份 (0 ~ 11)
    * #### `getFullYear()`	从 Date 对象以四位数字返回年份
    * #### `getYear()`	请使用 getFullYear() 方法代替
    * #### `getHours()`	返回 Date 对象的小时 (0 ~ 23)
    * #### `getMinutes()`	返回 Date 对象的分钟 (0 ~ 59)
    * #### `getSeconds()`	返回 Date 对象的秒数 (0 ~ 59)
    * #### `getMilliseconds()`	返回 Date 对象的毫秒(0 ~ 999)
    * #### `getTime()`	返回 1970 年 1 月 1 日至今的毫秒数
    * #### `getTimezoneOffset()`	返回本地时间与格林威治标准时间 (GMT) 的分钟差
    * #### `getUTCDate()`	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)
    * #### `getUTCDay()`	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)
    * #### `getUTCMonth()`	根据世界时从 Date 对象返回月份 (0 ~ 11)
    * #### `getUTCFullYear()`	根据世界时从 Date 对象返回四位数的年份
    * #### `getUTCHours()`	根据世界时返回 Date 对象的小时 (0 ~ 23)
    * #### `getUTCMinutes()`	根据世界时返回 Date 对象的分钟 (0 ~ 59)
    * #### `getUTCSeconds()`	根据世界时返回 Date 对象的秒钟 (0 ~ 59)
    * #### `getUTCMilliseconds()`	根据世界时返回 Date 对象的毫秒(0 ~ 999)
    * #### `parse()`	返回1970年1月1日午夜到指定日期（字符串）的毫秒数
    * #### `setDate()`	设置 Date 对象中月的某一天 (1 ~ 31)
    * #### `setMonth()`	设置 Date 对象中月份 (0 ~ 11)
    * #### `setFullYear()`	设置 Date 对象中的年份（四位数字）
    * #### `setYear()`	请使用 setFullYear() 方法代替
    * #### `setHours()`	设置 Date 对象中的小时 (0 ~ 23)
    * #### `setMinutes()`	设置 Date 对象中的分钟 (0 ~ 59)
    * #### `setSeconds()`	设置 Date 对象中的秒钟 (0 ~ 59)
    * #### `setMilliseconds()`	设置 Date 对象中的毫秒 (0 ~ 999)
    * #### `setTime()`	以毫秒设置 Date 对象
    * #### `setUTCDate()`	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)
    * #### `setUTCMonth()`	根据世界时设置 Date 对象中的月份 (0 ~ 11)
    * #### `setUTCFullYear()`	根据世界时设置 Date 对象中的年份（四位数字）
    * #### `setUTCHours()`	根据世界时设置 Date 对象中的小时 (0 ~ 23)
    * #### `setUTCMinutes()`	根据世界时设置 Date 对象中的分钟 (0 ~ 59)
    * #### `setUTCSeconds()`	根据世界时设置 Date 对象中的秒钟 (0 ~ 59)
    * #### `setUTCMilliseconds()`	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)
    * #### `toSource()`	返回该对象的源代码
    * #### `toString()`	把 Date 对象转换为字符串
    * #### `toTimeString()`	把 Date 对象的时间部分转换为字符串
    * #### `toDateString()`	把 Date 对象的日期部分转换为字符串
    * #### `toGMTString()`	请使用 toUTCString() 方法代替
    * #### `toUTCString()`	根据世界时，把 Date 对象转换为字符串
    * #### `toLocaleString()`	根据本地时间格式，把 Date 对象转换为字符串
    * #### `toLocaleTimeString()`	根据本地时间格式，把 Date 对象的时间部分转换为字符串
    * #### `toLocaleDateString()`	根据本地时间格式，把 Date 对象的日期部分转换为字符串
    * #### `UTC()`	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数
  

* ### Math(数学计算)

* ### Global(全局)
    * #### `String()` ---- 把对象转为字符串

    * #### `isFinite()` ---- 判断一个数是否是无穷大 

        ```javascript
            isFinite(123); //true
            isFinite(-1.23); //true
            isFinite(5-2); //true
            isFinite(0); //true
            isFinite("Hello"); //false
            isFinite(NaN) //false

            //如果是无穷返回false反之为true
        ```

    * #### `isNaN()` ---- 检测数字是否"不是一个数字"

        ```javascript
            isNaN(123); //false
            isNaN(NaN); //true
            isNaN('hello'); //true
        ```

    * #### `parseInt()`  ---- 解析一个字符串并返回一个整数
        
        ```javascript
            parseInt(123123.123123); // 123123
            parseInt('123iuunhao'); // 123
            parseInt('iuunhao123'); // Nan

            parseInt('FF', 16); // 255 

            //默认十进制
            //十六进制的颜色可以通过此方法转换成rgb颜色
        ```

    * #### `parseFloat()`  ---- 解析一个字符串并返回一个浮点数

        ```javascript
            parseFloat(123.123); //123.123
        ```

* ### RegExp(正则)

    * #### `test()`  ---- 用于检测一个字符串是否匹配某个模式
        
        ```javascript
            var reg = /iuunhao/g,
                str = 'hello iuunhao 2015';
                reg.test(str); // true
                reg.test('Vim'); // false 
        ```
    * #### `exec()` ---- 用于检索字符串中的正则表达式的匹配

