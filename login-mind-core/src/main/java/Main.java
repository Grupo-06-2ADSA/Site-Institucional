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
        Integer escolha = leitor.nextInt();

        AutenticacaoUsuario autenticacaoUsuario = new AutenticacaoUsuario();

        List<String> listaUsuarios = new ArrayList<>();
        List<Integer> listaSenhas = new ArrayList<>();

        listaUsuarios.add("André");
        listaSenhas.add(12345);

        listaUsuarios.add("Sofia");
        listaSenhas.add(54321);

        switch (escolha) {
            case 1 -> {
                autenticacaoUsuario.FazerLogin(listaUsuarios,listaSenhas);
            }
            case 2 -> {
                autenticacaoUsuario.FazerCadastro(listaUsuarios, listaSenhas);
            }
        }

    }
}
