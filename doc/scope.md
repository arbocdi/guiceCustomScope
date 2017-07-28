* Scope- это область вдимости экземпляра
* Provider<T> - это объект позволяющй получить экземпляр типа Т
с учетом области.
```java
public interface Provider<T> extends javax.inject.Provider<T> {
  T get();
}
```   
* Key - содержит ижектируемый тип и некую доп информацию (например аннотации)
