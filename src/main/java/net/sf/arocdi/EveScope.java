/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arocdi;

import com.google.inject.Key;
import com.google.inject.Provider;
import com.google.inject.Scope;
import com.google.inject.Scopes;
import java.util.HashMap;
import java.util.Map;

/**
 * Scope- это область вдимости экземпляра

   Provider<T> - это объект позволяющй получить экземпляр типа Т
   с учетом области.

   Key - содержит ижектируемый тип и некую доп информацию (например аннотации)
 * @author root
 */
public class EveScope implements Scope {

    //хранит экзепляры объектов в нашей области
    private Map<Key<?>, Object> objectMap;
    
    public void enter(){
        objectMap = new HashMap();
    }
    public void exit(){
        objectMap=null;
    }

    @Override
    public <T> Provider<T> scope(Key<T> key, Provider<T> unscoped) {
        return new Provider<T>() {
            @Override
            public T get() {
                if(objectMap==null) throw new RuntimeException("OutOfSope");
                Object instance = objectMap.get(key);
                if (instance == null) {
                    instance = unscoped.get();
                    // don't remember proxies; these exist only to serve circular dependencies
                    if (Scopes.isCircularProxy(instance)) {
                        return (T) instance;
                    }
                    objectMap.put(key, instance);
                }
                return (T) instance;
            }
        };

    }

}
