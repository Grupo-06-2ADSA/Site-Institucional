import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.processos.ProcessoGrupo;
import com.github.britooo.looca.api.group.servicos.ServicoGrupo;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.group.temperatura.Temperatura;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        System.out.println("""
                **      **  **  **   **  *******         ********  **********  *********    *********
                ** **** **  **  ***  **  **     **      **         **      **  **      **   **
                **  **  **  **  ** * **  **      **    **          **      **  *********    *****
                **      **  **  **  ***  **     **      **         **      **  **   **      **
                **      **  **  **   **  *******         ********  **********  **     **    *********
                
                """);

        Looca looca = new Looca();

        Sistema sistema = looca.getSistema();
        Memoria memoria = looca.getMemoria();
        Processador processador = looca.getProcessador();
        Temperatura temperatura = looca.getTemperatura();
        DiscoGrupo grupodeDiscos = looca.getGrupoDeDiscos();
        List<Disco> discos = grupodeDiscos.getDiscos();

        for (Disco disco : discos) {
            System.out.println(disco);
        }

        AutenticacaoUsuario autenticacaoUsuario = new AutenticacaoUsuario(sistema, memoria, processador, temperatura, grupodeDiscos);

        List<String> listaDadosUsuario = new ArrayList<>();

        listaDadosUsuario.add("andre.silva@sptech.school");
        listaDadosUsuario.add("123456");

        listaDadosUsuario.add("sofia.machado@sptech.school");
        listaDadosUsuario.add("654321");

        autenticacaoUsuario.teste();

        autenticacaoUsuario.FazerLogin(listaDadosUsuario);





    }
}
