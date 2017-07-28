/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arocdi;

import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Stage;
import com.google.inject.name.Names;
import lombok.Getter;

/**
 *
 * @author root
 */
public class EveModule extends AbstractModule {
    @Getter
    private static final Injector INJECTOR = Guice.createInjector(new EveModule());

    @Override
    protected void configure() {
        EveScope eve = new EveScope();
        
        // tell Guice about the scope
        bindScope(EveScoped.class, eve);

        // make our scope instance injectable
        bind(EveScope.class)
                .annotatedWith(Names.named("eve"))
                .toInstance(eve);
        bind(Battleship.class).to(Abaddon.class).in(EveScoped.class);
    }

}
