import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.println("""
                **      **  **  **   **  *******         ********  **********  *********    *********
                ** **** **  **  ***  **  **     **      **         **      **  **      **   **
                **  **  **  **  ** * **  **      **    **          **      **  *********    *****
                **      **  **  **  ***  **     **      **         **      **  **   **      **
                **      **  **  **   **  *******         ********  **********  **     **    *********
                
                Escolha uma forma de acesso!
                1 - Login
                2 - Cadastro
                """);
        int escolha = leitor.nextInt();

        AutenticacaoUsuario autenticacaoUsuario = new AutenticacaoUsuario();

        List<String> listaDadosUsuario = new ArrayList<>();


        listaDadosUsuario.add("andre.silva@sptech.school");
        listaDadosUsuario.add("14789523610024");
        listaDadosUsuario.add("SPTech School");
        listaDadosUsuario.add("11914257111");
        listaDadosUsuario.add("12345");

        listaDadosUsuario.add("sofia.machado@sptech.school");
        listaDadosUsuario.add("74729523740015");
        listaDadosUsuario.add("SPTech School");
        listaDadosUsuario.add("11978962477");
        listaDadosUsuario.add("54321");

        switch (escolha) {
            case 1 -> {
                autenticacaoUsuario.FazerLogin(listaDadosUsuario);
            }
            case 2 -> {
                autenticacaoUsuario.FazerCadastro(listaDadosUsuario);
            }
        }

    }
}
