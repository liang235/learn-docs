# Object 类
- 所有类的基类
- 所有的类都是直接或者间接继承 Object 类

## hashCode
- public int hashCode()
- 返回该对象的哈希码值，默认情况下，该方法会根据对象的地址来计算
- 不同对象的，hashCode() 一般来说不会相同，但是同一个对象的 hashCode() 肯定相同
