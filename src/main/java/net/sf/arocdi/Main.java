/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.arocdi;

import com.google.inject.Key;
import com.google.inject.name.Names;

/**
 *
 * @author root
 */
public class Main {
    public static void main(String[] args) {
        EveScope eveScope = EveModule.getINJECTOR().getInstance(Key.get(EveScope.class, Names.named("eve")));
        try{
            eveScope.enter();
            for(int i=0;i<10;i++){
                Battleship bs = EveModule.getINJECTOR().getInstance(Battleship.class);
                System.out.println(bs);
            }
        }
        finally{
            eveScope.exit();
        }
        
    }
}
