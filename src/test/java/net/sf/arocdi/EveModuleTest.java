/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arocdi;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.inject.name.Named;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author root
 */
public class EveModuleTest {
    
    @Inject
    @Named("eve")
    EveScope eveScope;
    
    
    
    public EveModuleTest() {
    }
    
    @Before
    public void setUp() {
        EveModule.getINJECTOR().injectMembers(this);
    }
    @After
    public void tearDon(){
    }
    
    @Test
    public void testScope(){
        eveScope.enter();
        Battleship bs1 =  EveModule.getINJECTOR().getInstance(Battleship.class);
        Battleship bs2 =  EveModule.getINJECTOR().getInstance(Battleship.class);
        Assert.assertSame(bs1, bs2);
        eveScope.exit();
        eveScope.enter();
        Battleship bs3 =  EveModule.getINJECTOR().getInstance(Battleship.class); 
        Assert.assertNotSame(bs3, bs1);
        eveScope.exit();
    }
    @Test(expected = RuntimeException.class)
    public void testOutOfSope(){
        EveModule.getINJECTOR().getInstance(Battleship.class); 
    }
   public void testProvider(){
        eveScope.enter();
        Provider<Battleship> bsProvider =  EveModule.getINJECTOR().getProvider(Battleship.class);
        Battleship bs1 =  bsProvider.get();
        Battleship bs2 =  bsProvider.get();
        Assert.assertSame(bs1, bs2);
        eveScope.exit();
        eveScope.enter();
        bsProvider =  EveModule.getINJECTOR().getProvider(Battleship.class);
        Battleship bs3 =  bsProvider.get();
        Assert.assertNotSame(bs3, bs1);
        eveScope.exit();
    }
   
   
    
}
