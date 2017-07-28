/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arocdi;

import com.google.inject.ScopeAnnotation;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.TYPE;
import java.lang.annotation.Retention;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Target;

/**
 *
 * @author root
 */
@Target({ TYPE, METHOD }) 
@Retention(RUNTIME) 
@ScopeAnnotation
public @interface EveScoped {
    
}
